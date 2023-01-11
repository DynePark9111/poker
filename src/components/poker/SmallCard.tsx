import { useContext } from "react";
import { PokerContext } from "../../contexts/PokerContext";
import styles from "../../styles/poker/SmallCard.module.scss";
import { GAME_STATUS } from "../../types/poker.types";

export default function SmallCard({ card }: CardProps) {
  const { status } = useContext(PokerContext);
  let isStart = status === GAME_STATUS.START;
  let isEnd = status === GAME_STATUS.END;

  return (
    <div
      className={`${styles.SmallCard} ${isEnd ? styles.noClick : ""}`}
      data-suit={card[1]}
      data-value={card[0]}
      id={isStart ? styles.flipBack : styles.flipFront}
    >
      <div className={styles.front} id={isStart ? styles.hide : styles.show}>
        {card[0]}
      </div>
      <div className={styles.back} />
    </div>
  );
}

type CardProps = {
  card: string;
};
