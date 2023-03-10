import { useContext } from "react";
import { PokerContext } from "../../contexts/PokerContext";
import styles from "../../styles/poker/Card.module.scss";
import { GAME_STATUS } from "../../types/poker.types";

export default function Card({ card, onClick, hold }: CardProps) {
  const { status } = useContext(PokerContext);

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
}

type CardProps = {
  card: string;
  onClick?: any;
  hold?: boolean;
};

function createEmptyArray(x: string) {
  if (x === "A" || x === "J" || x === "Q" || x === "K") {
    return [...Array(1).keys()];
  } else if (x === "T") {
    return [...Array(10).keys()];
  } else {
    return [...Array(Number(x)).keys()];
  }
}
