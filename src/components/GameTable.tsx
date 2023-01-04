import styles from "../styles/GameTable.module.scss";

export default function GameTable() {
  return (
    <div className={styles.GameTable}>
      <h1>GameTable</h1>
      <MainCards />
    </div>
  );
}

function SubCards() {
  const result = ["AS", "2S", "3S", "JS", "KH"];
  return (
    <div className={styles.SubCards}>
      {result.map((item) => {
        return <Card value={item} key={item} />;
      })}
    </div>
  );
}

function MainCards() {
  const result = ["AS", "2S", "3S", "JS", "KH"];
  return (
    <div className={styles.MainCards}>
      {result.map((item) => {
        return <Card value={item} key={item} />;
      })}
    </div>
  );
}

type CardType = {
  value: string;
};

function Card({ value }: CardType) {
  return (
    <div className={styles.Card}>
      <div className={styles.number}>{value[0]}</div>
      <div className={styles.suite}>{value[1]}</div>
    </div>
  );
}
