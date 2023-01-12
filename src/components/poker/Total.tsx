import styles from "../../styles/poker/Total.module.scss";
import ListItem from "../ListItem";
import { useContext, useEffect, useState } from "react";
import info from "../../assets/icons/info.webp";
import Modal from "../Modal";
import gems from "../../assets/icons/gems.webp";
import gem_purple from "../../assets/icons/gem_purple.webp";
import gem_purple2 from "../../assets/icons/gem_purple2.webp";
import trophy from "../../assets/icons/trophy.webp";
import { GAME_STATUS } from "../../types/poker.types";
import PayTable from "./PayTable";
import Window from "../Window";
import { ModalContext } from "../../contexts/ModalContext";
import { PokerContext } from "../../contexts/PokerContext";

export default function Total({ total, spend }: TotalProps) {
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const { status } = useContext(PokerContext);
  const [earned, setEarned] = useState(0);
  const [spent, setSpent] = useState(0);
  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    setEarned((prev) => prev + total);
    setSpent((prev) => prev + spend);
    if (status === GAME_STATUS.DEAL) {
      setRounds((prev) => prev + 1);
    }
  }, [total, spend]);

  return (
    <>
      <div
        className={styles.Total}
        onClick={() => setActiveModal("pokerStats")}
      >
        <ul>
          <ListItem label="EARNED" icon={info} count={earned} />
          {/* <ListItem label="TOTAL SPENT" icon={gems} count={spent} /> */}
        </ul>
        <div
          className={styles.ribbon}
          id={status === GAME_STATUS.END ? styles.show : styles.hide}
        >
          + {total}
        </div>
      </div>

      <Modal isOpen={activeModal === "pokerStats"}>
        <Window>
          <PayTable />
          <PokerStats />
        </Window>
      </Modal>
    </>
  );

  function PokerStats() {
    return (
      <ul className={styles.PokerStats}>
        <ListItem label="EARNED" icon={gems} count={earned} />
        <ListItem label="SPENT" icon={gem_purple} count={spent} />
        <ListItem label="TOTAL" icon={gem_purple2} count={earned - spent} />
        <ListItem label="ROUNDS PLAYED" icon={trophy} count={rounds} />
      </ul>
    );
  }
}

type TotalProps = {
  total: number;
  spend: number;
};
