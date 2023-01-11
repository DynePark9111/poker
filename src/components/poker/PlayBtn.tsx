import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import { mainCardsType } from "../../pages/PokerPage";
import styles from "../../styles/poker/PlayBtn.module.scss";
import { GAME_STATUS } from "../../types/poker.types";
import Btn from "../Btn";

export default function PlayBtn({
  playOnClick,
  status,
  multi,
  multiDecks,
  setMultiDecks,
  multiOnClick,
}: PlayBtnProps) {
  const { addAlert } = useContext(AlertContext);

  function sortCard() {
    if (status !== "CLAIM") {
      addAlert("You can't sort now", "error");
    } else {
      let sorted = multiDecks.sort((a, b) => Number(a.rank) - Number(b.rank));
      setMultiDecks(sorted);
      addAlert("sorted", "success");
    }
  }
  return (
    <div className={styles.PlayBtn}>
      <Btn color="#efc308" onClick={multiOnClick}>
        <div className={styles.multi}>x{multi}</div>
      </Btn>
      <Btn color="#efc308" onClick={sortCard}>
        <div className={styles.sort}>SORT</div>
      </Btn>
      <Btn color="#efc308" onClick={playOnClick}>
        <div className={styles.play}>{status}</div>
      </Btn>
    </div>
  );
}

type PlayBtnProps = {
  playOnClick: () => void;
  setMultiDecks: (mainCards: mainCardsType[]) => void;
  status: string;
  multi: number;
  multiOnClick: () => void;
  multiDecks: mainCardsType[];
};
