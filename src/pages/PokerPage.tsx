import { useContext, useEffect, useState } from "react";
import Background from "../components/Background";
import PokerTable from "../components/poker/PokerTable";
import Menu from "../components/Menu";
import PlayBtn from "../components/poker/PlayBtn";
import Wallet from "../components/Wallet";
import styles from "../styles/pages/PokerPage.module.scss";
import axios from "axios";
import { RANK_TYPE, GAME_STATUS } from "../types/types";
import { INITIAL_DECK, URL } from "../data/data";
import Total from "../components/poker/Total";
import confetti from "../assets/lottie/confetti.json";
import LottieImage from "../components/LottieImage";
import { AlertContext } from "../contexts/AlertContext";
import { UserContext } from "../contexts/UserContext";

export type mainCardsType = {
  cards: string[];
  rank: RANK_TYPE;
};

const INITIAL_MAIN_CARDS: mainCardsType = {
  cards: INITIAL_DECK,
  rank: "0" as RANK_TYPE,
};

export default function PokerPage() {
  const { addAlert } = useContext(AlertContext);
  const { user, handleGem } = useContext(UserContext);

  //TODO : FIX THIS MESS
  //res game/new
  const [mainCards, setMainCards] = useState<mainCardsType>(INITIAL_MAIN_CARDS);

  //res game/change
  const [multiDecks, setMultiDecks] = useState([INITIAL_MAIN_CARDS]);
  const [total, setTotal] = useState(0);

  //req game/change = TODO? change to single state?
  const [multi, setMulti] = useState(1);
  const [toHold, setToHold] = useState<string[]>([]);
  const [status, setStatus] = useState(GAME_STATUS.START);

  useEffect(() => {
    function duplicateArray(length: number, fillWith: any) {
      return Array(length).fill(fillWith);
    }
    let duplicated = duplicateArray(multi, INITIAL_MAIN_CARDS);
    setMultiDecks(duplicated);
  }, [multi]);

  function playOnClick() {
    if (status === GAME_STATUS.LOADING) return console.log("LOADING");
    if (status === GAME_STATUS.START) return startGame();
    if (status === GAME_STATUS.DEAL) return changeCards();
    if (status === GAME_STATUS.END) return endGame();
  }

  function multiOnClick() {
    let max = 64;
    if (status === GAME_STATUS.START) {
      if (multi < max) return setMulti((prev: number) => prev * 2);
      if (multi >= max) return setMulti(1);
    } else {
      addAlert("You can only change before the game.", "error");
    }
  }

  function gameStatus() {
    if (status === GAME_STATUS.START) return "START";
    if (status === GAME_STATUS.DEAL) return "DEAL";
    if (status === GAME_STATUS.END) return "CLAIM";
    if (status === GAME_STATUS.ERROR) return "ERROR";
    return "";
  }

  async function startGame() {
    setStatus(GAME_STATUS.LOADING);
    axios
      .get(`${URL}/game/new`)
      .then((res) => {
        setMainCards(res.data);
        setStatus(GAME_STATUS.DEAL);
        setMultiDecks(Array(multi).fill(res.data));
        handleGem(user.gem - multi);
      })
      .catch((err) => {
        console.log(err);
        setStatus(GAME_STATUS.ERROR);
      });
  }

  async function changeCards() {
    setStatus(GAME_STATUS.LOADING);
    let notToHold = mainCards.cards.filter((x) => !new Set([...toHold]).has(x));

    let req = {
      myCards: mainCards.cards,
      count: multi + 1,
      toChange: notToHold,
    };
    axios
      .post(`${URL}/game/change`, req)
      .then((res) => {
        setMainCards(res.data.results[0]);
        setMultiDecks(res.data.results.slice(1));
        setTotal(res.data.total);
        setStatus(GAME_STATUS.END);
      })
      .catch((err) => {
        console.log(err);
        setStatus(GAME_STATUS.ERROR);
      });
  }

  async function endGame() {
    setStatus(GAME_STATUS.START);
    handleGem(user.gem + total);
    setMainCards(INITIAL_MAIN_CARDS);
    setToHold([]);
  }

  function playConfetti() {
    let isBigWin =
      status === GAME_STATUS.END && total > (multiDecks.length + 1) * 2;
    return isBigWin;
  }

  return (
    <div className={styles.PokerPage}>
      <Background color="#005f00" />
      <Menu />
      <Wallet />
      <PokerTable
        multiDecks={multiDecks}
        mainCards={mainCards}
        toHold={toHold}
        setToHold={setToHold}
        status={status}
      />
      <Total
        status={status}
        total={status === GAME_STATUS.END ? total : 0}
        spend={status === GAME_STATUS.DEAL ? multiDecks.length + 1 : 0}
      />
      <PlayBtn
        multi={multi}
        status={gameStatus()}
        playOnClick={playOnClick}
        multiOnClick={multiOnClick}
      />
      <LottieImage image={confetti} play={playConfetti()} loop={false} />
    </div>
  );
}
