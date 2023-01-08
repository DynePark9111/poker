import styles from "../styles/PokerTable.module.scss";
import Card from "./Card";
import { COLOR_TABLE, GAME_STATUS, PAY_TABLE, RANK } from "../types/types";
import { mainCardsType } from "../pages/PokerPage";

type PokerTableProps = {
  mainCards: mainCardsType;
  toHold: string[];
  setToHold: any;
  status: number;
  multiDecks: mainCardsType[];
};

type MultiTableProps = {
  multiDecks: mainCardsType[];
  status: number;
};

type MainTableProps = {
  mainCards: mainCardsType;
  toHold: string[];
  setToHold: any;
  status: number;
};

export default function PokerTable({
  toHold,
  setToHold,
  status,
  multiDecks,
  mainCards,
}: PokerTableProps) {
  return (
    <div className={styles.PokerTable}>
      <MultiTable multiDecks={multiDecks} status={status} />
      <MainTable
        mainCards={mainCards}
        toHold={toHold}
        setToHold={setToHold}
        status={status}
      />
    </div>
  );
}

function MultiTable({ multiDecks, status }: MultiTableProps) {
  return (
    <div className={styles.MultiTable}>
      {multiDecks.map((multiDeck: mainCardsType, i: number) => {
        return (
          // TODO: fix key
          <div className={styles.smallTable} key={multiDeck.cards.join() + i}>
            <Result status={status} cards={multiDeck} />
            {multiDeck.cards.map((card: string) => {
              return <Card key={card} card={card} status={status} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

function MainTable({ mainCards, toHold, setToHold, status }: MainTableProps) {
  function chooseCard(a: string[], b: string) {
    if (!a.includes(b)) {
      setToHold([...a, b]);
    } else {
      setToHold([...a].filter((x) => x !== b));
    }
  }
  return (
    <div className={styles.MainTable}>
      <Result status={status} cards={mainCards} />
      {mainCards.cards.map((card) => {
        return (
          <Card
            key={card}
            card={card}
            onClick={() => chooseCard(toHold, card)}
            hold={toHold.includes(card) ? true : false}
            status={status}
          />
        );
      })}
    </div>
  );
}

type ResultProps = {
  status: number;
  cards: mainCardsType;
};

function Result({ status, cards }: ResultProps) {
  let isEnd = status === GAME_STATUS.END;
  // TODO change color
  return (
    <div
      className={styles.Result}
      id={isEnd ? styles.show : ""}
      style={{ backgroundColor: COLOR_TABLE[cards.rank] }}
    >
      {`${RANK[cards.rank]} (${PAY_TABLE[cards.rank]})`}
    </div>
  );
}
