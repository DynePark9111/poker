import { lazy, Suspense, useContext, useState } from "react";
import Background from "../components/Background";
import PokerTable from "../components/poker/PokerTable";
import Menu from "../components/Menu";
import PlayBtn from "../components/poker/PlayBtn";
import Wallet from "../components/Wallet";
import styles from "../styles/pages/PokerPage.module.scss";
import { GAME_STATUS } from "../types/poker.types";
import Total from "../components/poker/Total";
import confetti from "../assets/lottie/confetti.json";
import Profile from "../components/Profile";
import { INITIAL_HAND, PokerContext } from "../contexts/PokerContext";
import { UserContext } from "../contexts/UserContext";
import { AlertContext } from "../contexts/AlertContext";
import axios from "axios";

const LottieImage = lazy(() => import("../components/LottieImage"));

export default function PokerPage() {
  const URL = import.meta.env.VITE_URL;
  const [total, setTotal] = useState(0);
  const { addAlert } = useContext(AlertContext);
  const { user, handleGem } = useContext(UserContext);
  const {
    status,
    setStatus,
    hand,
    setHand,
    setMultiHand,
    multi,
    hold,
    setHold,
  } = useContext(PokerContext);

  return (
    <div className={styles.PokerPage}>
      <Background color="#005f00" />
      <Profile />
      <Menu />
      <Wallet />
      <PokerTable />
      <Total
        total={status === GAME_STATUS.END ? total : 0}
        spend={status === GAME_STATUS.DEAL ? multi + 1 : 0}
      />
      <PlayBtn onClickPlay={onClickPlay} />
      <LottieImage image={confetti} play={playConfetti()} loop={false} />
    </div>
  );

  function onClickPlay() {
    if (status === GAME_STATUS.START) return startGame();
    if (status === GAME_STATUS.DEAL) return deal();
    if (status === GAME_STATUS.END) return endGame();
    if (status === GAME_STATUS.LOADING) return addAlert("Loading...", "error");
    if (status === GAME_STATUS.START && user.gem < multi + 1)
      return addAlert("You need more gems.", "error");
  }

  async function startGame() {
    setStatus(GAME_STATUS.LOADING);
    axios
      .get(`${URL}/game/new`)
      .then((res) => {
        setHand(res.data);
        setStatus(GAME_STATUS.DEAL);
        handleGem(-multi - 1, user);
        setMultiHand(Array(multi).fill(res.data));
      })
      .catch((err) => {
        console.log(err);
        setStatus(GAME_STATUS.ERROR);
      });
  }

  async function deal() {
    setStatus(GAME_STATUS.LOADING);
    let notToHold = hand.cards.filter((x) => !new Set([...hold]).has(x));
    let req = {
      myCards: hand.cards,
      count: multi + 1,
      toChange: notToHold,
    };
    axios
      .post(`${URL}/game/change`, req)
      .then((res) => {
        setHand(res.data.results[0]);
        setMultiHand(res.data.results.slice(1));
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
    handleGem(total, user);
    setHand(INITIAL_HAND);
    setHold([]);
  }

  function playConfetti() {
    let isBigWin = status === GAME_STATUS.END && total > (multi + 1) * 2;
    return isBigWin;
  }
}
