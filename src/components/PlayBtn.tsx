import styles from "../styles/PlayBtn.module.scss";
import Btn from "./Btn";

type PlayBtnProps = {
  playOnClick: () => void;
  status: string;
  multi: number;
  multiOnClick: any;
};

export default function PlayBtn({
  playOnClick,
  status,
  multi,
  multiOnClick,
}: PlayBtnProps) {
  return (
    <div className={styles.PlayBtn}>
      <Btn color="#efc308" onClick={multiOnClick}>
        <div className={styles.multi}>x{multi}</div>
      </Btn>
      <Btn color="#efc308" onClick={playOnClick}>
        <div className={styles.play}>{status}</div>
      </Btn>
    </div>
  );
}
