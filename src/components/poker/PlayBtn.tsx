import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import { DarkmodeContext } from "../../contexts/DarkmodeContext";
import { PokerContext } from "../../contexts/PokerContext";
import styles from "../../styles/poker/PlayBtn.module.scss";
import { GAME_STATUS } from "../../types/poker.types";
import Btn from "../Btn";

export default function PlayBtn({ onClickPlay }: PlayBtnProps) {
  const { addAlert } = useContext(AlertContext);
  const { status, multiHand, setMultiHand, multi, setMulti } =
    useContext(PokerContext);
  const { isDark } = useContext(DarkmodeContext);
  let color = isDark ? "#bf9c06" : "#efc308";

  return (
    <div className={styles.PlayBtn}>
      <Btn color={color} onClick={onClickMulti}>
        <div className={styles.multi}>x{multi}</div>
      </Btn>
      <Btn color={color} onClick={onClickSort}>
        <div className={styles.sort}>SORT</div>
      </Btn>
      <Btn color={color} onClick={onClickPlay}>
        <div className={styles.play}>{gameStatus()}</div>
      </Btn>
    </div>
  );

  function onClickMulti() {
    let maxTable = 64;
    if (status === GAME_STATUS.START) {
      if (multi < maxTable) return setMulti(multi * 2);
      if (multi >= maxTable) return setMulti(1);
    } else {
      addAlert("You can only change before the game.", "error");
    }
  }

  function onClickSort() {
    if (status !== GAME_STATUS.END) {
      addAlert("You can't sort now", "error");
    } else {
      let sorted = multiHand.sort((a, b) => Number(a.rank) - Number(b.rank));
      setMultiHand(sorted);
      addAlert("sorted", "success");
    }
  }

  function gameStatus() {
    if (status === GAME_STATUS.START) return "START";
    if (status === GAME_STATUS.DEAL) return "DEAL";
    if (status === GAME_STATUS.END) return "CLAIM";
    if (status === GAME_STATUS.ERROR) return "ERROR";
    return "";
  }
}

type PlayBtnProps = {
  onClickPlay: () => void;
};
