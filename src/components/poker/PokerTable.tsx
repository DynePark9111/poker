import styles from "../../styles/poker/PokerTable.module.scss";
import Card from "./Card";
import {
  COLOR_TABLE,
  GAME_STATUS,
  PAY_TABLE,
  RANK,
} from "../../types/poker.types";
import SmallCard from "./SmallCard";
import { handType, PokerContext } from "../../contexts/PokerContext";
import { useContext } from "react";

export default function PokerTable() {
  return (
    <div className={styles.PokerTable}>
      <MultiTable />
      <MainTable />
    </div>
  );
}

function MultiTable() {
  const { multiHand } = useContext(PokerContext);

  return (
    <div className={styles.MultiTable}>
      {multiHand.map((multiDeck: handType, i: number) => {
        return (
          <div className={styles.smallTable} key={multiDeck.toString() + i}>
            <Result hand={multiDeck} />
            {multiDeck.cards.map((card: string) => {
              return <SmallCard key={card} card={card} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

function MainTable() {
  const { hand, hold, setHold } = useContext(PokerContext);

  function onClickHold(a: string[], b: string) {
    if (!a.includes(b)) {
      setHold([...a, b]);
    } else {
      setHold([...a].filter((x) => x !== b));
    }
  }

  return (
    <div className={styles.MainTable}>
      <Result hand={hand} />
      {hand.cards.map((card) => {
        return (
          <Card
            key={card}
            card={card}
            onClick={() => onClickHold(hold, card)}
            hold={hold.includes(card) ? true : false}
          />
        );
      })}
    </div>
  );
}

function Result({ hand }: ResultProps) {
  const { status } = useContext(PokerContext);
  let isEnd = status === GAME_STATUS.END;

  return (
    <div
      className={styles.Result}
      id={isEnd ? styles.show : ""}
      style={{ backgroundColor: COLOR_TABLE[hand.rank] }}
    >
      {`${RANK[hand.rank]} (${PAY_TABLE[hand.rank]})`}
    </div>
  );
}

type ResultProps = {
  hand: handType;
};
