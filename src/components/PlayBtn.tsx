import styles from "../styles/PlayBtn.module.scss";
import Btn from "./Btn";

type PlayBtnProps = {
  onClick: () => void;
  status: string;
};

export default function PlayBtn({ onClick, status }: PlayBtnProps) {
  return (
    <div className={styles.PlayBtn} onClick={onClick}>
      {/* <div className={styles.multi} onClick={() => increaseUntil(multi)}>
        <Btn>
          <div className={styles.wrapper}>x {multi}</div>
        </Btn>
      </div> */}
      <Btn color="#eec306">
        <div className={styles.wrapper}>{status}</div>
      </Btn>
    </div>
  );

  // function increaseUntil(x: number) {
  //   x < 16 ? setMulti(x * 2) : setMulti(1);
  // }
}
