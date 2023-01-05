import { useState } from "react";
import styles from "../styles/GameTable.module.scss";

type GameTableProps = {
  multi: number;
};

export default function GameTable({ multi }: GameTableProps) {
  return (
    <div className={styles.GameTable}>
      <div className={styles.MultiTable}>
        {[...Array(multi).keys()].map((_, i) => {
          return <div className={styles.smallTable} key={i}></div>;
        })}
      </div>
      <MainCards />
    </div>
  );
}

function MainCards() {
  const result = ["AS", "9S", "TC", "JD", "KH"];
  const [hold, setHold] = useState<string[]>([]);
  function chooseCard(a: string[], b: string) {
    if (!a.includes(b)) {
      setHold([...a, b]);
    } else {
      setHold([...a].filter((x) => x !== b));
    }
  }
  return (
    <div className={styles.MainCards}>
      {result.map((card) => {
        return (
          <Card
            key={card}
            card={card}
            onClick={() => chooseCard(hold, card)}
            hold={hold.includes(card) ? true : false}
          />
        );
      })}
    </div>
  );
}

type CardType = {
  card: string;
  onClick?: any;
  hold?: boolean;
};

function Card({ card, onClick, hold }: CardType) {
  let iconCount = createEmptyArray(card[0]);
  return (
    <div
      className={styles.Card}
      data-suit={card[1]}
      data-value={card[0]}
      onClick={onClick}
    >
      <div className={styles.hold} id={hold ? styles.show : styles.hide}>
        HOLD
      </div>
      {iconCount.map((_, i) => {
        return <div className={styles.icon} key={i} />;
      })}
      <div className={`${styles.cornerNumber} ${styles.top}`}>{card[0]}</div>
      <div className={`${styles.cornerNumber} ${styles.bottom}`}>{card[0]}</div>
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
