import styles from "../styles/Menu.module.scss";
import { FaBars } from "react-icons/fa";
import { ReactNode, useState } from "react";
import Btn from "./Btn";
import store from "../assets/cards/gem4.webp";
import rank from "../assets/cards/rank.webp";
import news from "../assets/cards/news.webp";
import friend from "../assets/cards/people.webp";
import board from "../assets/cards/board.webp";
import report from "../assets/cards/robot2.webp";

type ListBtnProps = {
  title: string;
  icon?: string;
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.Menu}>
      <div
        className={styles.menuBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Btn>
          <div className={styles.faBars}>
            <FaBars />
          </div>
        </Btn>
      </div>
      {isOpen && (
        <ul className={styles.menuItems}>
          <ListBtn title={"shop"} icon={store} />
          <ListBtn title={"ranking"} icon={rank} />
          <ListBtn title={"news"} icon={news} />
          <ListBtn title={"friend"} icon={friend} />
          <ListBtn title={"board"} icon={board} />
          <ListBtn title={"report"} icon={report} />
        </ul>
      )}
    </div>
  );
}

function ListBtn({ title, icon }: ListBtnProps) {
  return (
    <li className={styles.ListBtn}>
      <Btn>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <img src={icon} />
          </div>
          <div className={styles.text}>{title.toUpperCase()}</div>
        </div>
      </Btn>
    </li>
  );
}
