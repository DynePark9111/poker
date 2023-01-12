import styles from "../styles/Aside.module.scss";
import TinyBtn from "./TinyBtn";
import shop from "../assets/icons/shop.webp";
import rank from "../assets/icons/rank.webp";
import news from "../assets/icons/news.webp";
import chat from "../assets/icons/chat.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";

export default function Aside() {
  const { addAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  function underDev() {
    addAlert("Under development", "error");
  }

  return (
    <div className={styles.Aside}>
      <div className={styles.left}>
        <TinyBtn text="shop" onClick={() => navigate("/shop")} icon={shop} />
        <TinyBtn
          text="ranking"
          onClick={underDev}
          icon={rank}
          disabled={true}
        />
        <TinyBtn text="log" onClick={underDev} icon={board} disabled={true} />
      </div>
      <div className={styles.right}>
        <TinyBtn
          text="friend"
          onClick={underDev}
          icon={friend}
          disabled={true}
        />
        <TinyBtn text="chat" onClick={underDev} icon={chat} disabled={true} />
        <TinyBtn text="news" onClick={underDev} icon={news} disabled={true} />
      </div>
    </div>
  );
}
