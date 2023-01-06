import styles from "../styles/PokerTable.module.scss";
import Card from "./Card";
import { GAME_STATUS, RANK, RANK_TYPE } from "../types/types";

type PokerTableProps = {
  multi: number;
  myDeck: string[];
  toChange: string[];
  setToChange: any;
  result: RANK_TYPE;
  status: number;
};

type MainTableProps = {
  myDeck: string[];
  toChange: string[];
  setToChange: any;
  result: RANK_TYPE;
  status: number;
};

export default function PokerTable({
  multi,
  myDeck,
  toChange,
  setToChange,
  result,
  status,
}: PokerTableProps) {
  return (
    <div className={styles.PokerTable}>
      <div className={styles.MultiTable}>
        {[...Array(multi).keys()].map((_, i) => {
          return <div className={styles.smallTable} key={i}></div>;
        })}
      </div>
      <MainTable
        result={result}
        myDeck={myDeck}
        toChange={toChange}
        setToChange={setToChange}
        status={status}
      />
    </div>
  );
}

function MainTable({
  myDeck,
  toChange,
  setToChange,
  result,
  status,
}: MainTableProps) {
  function chooseCard(a: string[], b: string) {
    if (!a.includes(b)) {
      setToChange([...a, b]);
    } else {
      setToChange([...a].filter((x) => x !== b));
    }
  }
  return (
    <div className={styles.MainTable}>
      {status === GAME_STATUS.END && (
        <div className={styles.result}>
          {/* <div>{`$${PAY_TABLE[result]}`}</div> */}
          <div>{RANK[result]}</div>
        </div>
      )}

      {myDeck.map((card) => {
        return (
          <Card
            key={card}
            card={card}
            onClick={() => chooseCard(toChange, card)}
            hold={toChange.includes(card) ? true : false}
            status={status}
          />
        );
      })}
    </div>
  );
}
