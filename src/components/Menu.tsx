import styles from "../styles/Menu.module.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Btn from "./Btn";
import rank from "../assets/icons/rank.webp";
import trophy from "../assets/icons/trophy.webp";
import store from "../assets/icons/gems.webp";
import news from "../assets/icons/news.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import report from "../assets/icons/robot2.webp";
import star from "../assets/icons/star.webp";
import { useNavigate } from "react-router-dom";

type ListBtnProps = {
  title: string;
  icon?: string;
  onClick?: () => void;
};

export default function Menu() {
  const navigate = useNavigate();
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
          <ListBtn title={"home"} icon={star} onClick={() => navigate("/")} />
          <ListBtn
            title={"poker"}
            icon={trophy}
            onClick={() => navigate("/poker")}
          />
          <ListBtn
            title={"my home"}
            icon={rank}
            onClick={() => navigate("/my")}
          />
          {/* <ListBtn title={"ranking"} icon={rank} /> */}
          {/* <ListBtn title={"news"} icon={news} /> */}
          {/* <ListBtn title={"friend"} icon={friend} /> */}
          {/* <ListBtn title={"board"} icon={board} /> */}
          {/* <ListBtn title={"report"} icon={report} /> */}
        </ul>
      )}
    </div>
  );
}

function ListBtn({
  title,
  icon,
  onClick = () => console.log("ListBtn clicked"),
}: ListBtnProps) {
  return (
    <li className={styles.ListBtn} onClick={onClick}>
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
