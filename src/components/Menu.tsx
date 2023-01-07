import styles from "../styles/Menu.module.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Btn from "./Btn";
import store from "../assets/icons/gems.webp";
import rank from "../assets/icons/rank.webp";
import news from "../assets/icons/news.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import report from "../assets/icons/robot2.webp";

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
