import styles from "../styles/Card.module.scss";
import { GAME_STATUS } from "../types/types";

type CardProps = {
  card: string;
  onClick?: any;
  hold?: boolean;
  status: number;
};

export default function Card({ card, onClick, hold, status }: CardProps) {
  let iconCount = createEmptyArray(card[0]);
  let isStart = status === GAME_STATUS.START;
  let isEnd = status === GAME_STATUS.END;

  return (
    <div
      className={`${styles.Card} ${isEnd ? styles.noClick : ""}`}
      data-suit={card[1]}
      data-value={card[0]}
      id={isStart ? styles.flipBack : styles.flipFront}
    >
      <div className={styles.front} onClick={onClick}>
        {iconCount.map((_, i) => {
          return <div className={styles.icon} key={i} />;
        })}
        <div className={`${styles.cornerNumber} ${styles.top}`}>{card[0]}</div>
        <div className={`${styles.cornerNumber} ${styles.bottom}`}>
          {card[0]}
        </div>
      </div>
      <div className={styles.back} />
      <div className={styles.hold} id={hold ? styles.show : styles.hide}>
        HOLD
      </div>
    </div>
  );

  function createEmptyArray(x: string) {
    if (x === "A" || x === "J" || x === "Q" || x === "K") {
      return [...Array(1).keys()];
    } else if (x === "T") {
      return [...Array(10).keys()];
    } else {
      return [...Array(Number(x)).keys()];
    }
  }
}
