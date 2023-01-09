import styles from "../../styles/poker/Total.module.scss";
import ListItem from "../ListItem";
import { useEffect, useState } from "react";
import info from "../../assets/icons/info.webp";
import Modal from "../Modal";
import gems from "../../assets/icons/gems.webp";
import gem from "../../assets/icons/gem_purple.webp";
import star from "../../assets/icons/star.webp";
import Btn from "../Btn";
import {
  GAME_STATUS,
  PAY_TABLE,
  PROBABILITY_TABLE,
  RANK,
  RANK_TYPE,
} from "../../types/types";

type TotalProps = {
  total: number;
  spend: number;
  status: number;
};

export default function Total({ total, status, spend }: TotalProps) {
  const [earned, setEarned] = useState(0);
  const [spent, setSpent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rounds, setRounds] = useState(0);

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    setEarned((prev) => prev + total);
    setSpent((prev) => prev + spend);
    if (status === GAME_STATUS.DEAL) {
      setRounds((prev) => prev + 1);
    }
  }, [total, spend]);

  return (
    <>
      <div className={styles.Total} onClick={toggleModal}>
        <ListItem label="EARNED" icon={info} count={earned} />
        {/* <ListItem label="TOTAL SPENT" icon={gems} count={spent} /> */}
        <div
          className={styles.ribbon}
          id={status === GAME_STATUS.END ? styles.show : styles.hide}
        >
          + {total}
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <Window
          earned={earned}
          spent={spent}
          rounds={rounds}
          closeWindow={toggleModal}
        />
      </Modal>
    </>
  );
}

type WindowProps = {
  earned: number;
  spent: number;
  rounds: number;
  closeWindow: () => void;
};

function Window({ earned, spent, rounds, closeWindow }: WindowProps) {
  return (
    <div className={styles.Window}>
      <header>
        <div className={styles.title}>Jacks or Better</div>
        <div className={styles.closeBtn} onClick={closeWindow}>
          <Btn color="#e4301f">
            <div className={styles.xIcon}>X</div>
          </Btn>
        </div>
      </header>
      <section>
        <PayTable />
        <ul className={styles.info}>
          <ListItem label="EARNED" icon={gems} count={earned} />
          <ListItem label="SPENT" icon={gem} count={spent} />
          <ListItem label="TOTAL" icon={star} count={earned - spent} />
          <ListItem label="ROUNDS PLAYED" icon={star} count={rounds} />
        </ul>
      </section>
    </div>
  );
}

function PayTable() {
  return (
    <table className={styles.PayTable}>
      <thead>
        <tr>
          <th>Hand</th>
          <th>Pay</th>
          <th>Probability(%)</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(PAY_TABLE)
          .slice(1)
          .map((pay: string) => {
            return (
              <tr key={pay}>
                <th>{RANK[pay as RANK_TYPE]}</th>
                <td>{PAY_TABLE[pay as RANK_TYPE]}</td>
                <td>{PROBABILITY_TABLE[pay as RANK_TYPE]}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
