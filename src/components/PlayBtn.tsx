import styles from "../styles/PlayBtn.module.scss";
import Btn from "./Btn";

export default function PlayBtn() {
  return (
    <div className={styles.PlayBtn}>
      {/* <div className={styles.multi} onClick={() => increaseUntil(multi)}>
        <Btn>
          <div className={styles.wrapper}>x {multi}</div>
        </Btn>
      </div> */}
      <Btn color="#eec306">
        <div className={styles.wrapper}>Play</div>
      </Btn>
    </div>
  );

  // function increaseUntil(x: number) {
  //   x < 16 ? setMulti(x * 2) : setMulti(1);
  // }
}
