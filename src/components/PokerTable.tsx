import styles from "../styles/PokerTable.module.scss";
import Card from "./Card";
import { GAME_STATUS, RANK, RANK_TYPE } from "../types/types";
import { mainCardsType } from "../pages/PokerPage";

type PokerTableProps = {
  mainCards: mainCardsType;
  toHold: string[];
  setToHold: any;
  status: number;
  multiDecks: mainCardsType[];
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
  console.log(multiDecks);
  return (
    <div className={styles.PokerTable}>
      <div className={styles.MultiTable}>
        {multiDecks.map((multiDeck: mainCardsType, i: number) => {
          return (
            <div className={styles.smallTable}>
              {status === GAME_STATUS.END && (
                <div className={styles.result}>
                  <div>{RANK[multiDeck.rank]}</div>
                </div>
              )}
              {multiDeck.cards.map((card: string) => {
                return <Card key={card} card={card} status={status} />;
              })}
            </div>
          );
        })}
      </div>
      <MainTable
        mainCards={mainCards}
        toHold={toHold}
        setToHold={setToHold}
        status={status}
      />
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
      {status === GAME_STATUS.END && (
        <div className={styles.result}>
          <div>{RANK[mainCards.rank]}</div>
        </div>
      )}
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
