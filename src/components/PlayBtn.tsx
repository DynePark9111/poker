import styles from "../styles/PlayBtn.module.scss";
import Btn from "./Btn";

type PlayBtnProps = {
  onClick: () => void;
  status: string;
};

export default function PlayBtn({ onClick, status }: PlayBtnProps) {
  return (
    <div className={styles.PlayBtn} onClick={onClick}>
      <Btn color="#eec306">
        <div className={styles.wrapper}>{status}</div>
      </Btn>
    </div>
  );
}
