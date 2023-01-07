import { useState } from "react";
import Background from "../components/Background";
import PokerTable from "../components/PokerTable";
import Menu from "../components/Menu";
import PlayBtn from "../components/PlayBtn";
import Wallet from "../components/Wallet";
import styles from "../styles/PokerPage.module.scss";
import axios from "axios";
import { RANK_TYPE, GAME_STATUS } from "../types/types";
import { INITIAL_DECK, URL } from "../data/data";
import Total from "../components/Total";

export default function PokerPage() {
  //res.data
  const [multi, setMulti] = useState(1);
  const [myDeck, setMyDeck] = useState<string[]>(INITIAL_DECK);
  const [toHold, setToHold] = useState<string[]>([]);
  const [result, setResult] = useState<RANK_TYPE>("0");
  const [status, setStatus] = useState(GAME_STATUS.START);

  function playBtnOnclick() {
    if (status === GAME_STATUS.LOADING) return console.log("LOADING");
    if (status === GAME_STATUS.START) return startGame();
    if (status === GAME_STATUS.DEAL) return changeCards();
    if (status === GAME_STATUS.END) return endGame();
  }

  function playBtnStatus() {
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
        setStatus(GAME_STATUS.DEAL);
        setMyDeck(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
        setStatus(GAME_STATUS.ERROR);
      });
  }

  async function changeCards() {
    setStatus(GAME_STATUS.LOADING);
    let notToHold = myDeck.filter((x) => !new Set([...toHold]).has(x));

    let req = {
      myCards: myDeck,
      count: multi,
      toChange: notToHold,
    };
    axios
      .post(`${URL}/game/change`, req)
      .then((res) => {
        setMyDeck(res.data.results[0].cards);
        setResult(res.data.results[0].rank);
        setStatus(GAME_STATUS.END);
      })
      .catch((err) => {
        console.log(err);
        setStatus(GAME_STATUS.ERROR);
      });
  }

  async function endGame() {
    setStatus(GAME_STATUS.START);
    setMyDeck(INITIAL_DECK);
    setResult("0");
    setToHold([]);
  }
  console.log(myDeck);

  return (
    <div className={styles.PokerPage}>
      <Background />
      <Menu />
      <Wallet />
      <PokerTable
        multi={multi}
        myDeck={myDeck}
        toHold={toHold}
        result={result}
        setToHold={setToHold}
        status={status}
      />
      <Total result={result} isClaim={status === GAME_STATUS.END} />
      <PlayBtn onClick={playBtnOnclick} status={playBtnStatus()} />
    </div>
  );
}
