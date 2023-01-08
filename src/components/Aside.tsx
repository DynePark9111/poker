import styles from "../styles/Aside.module.scss";
import TinyBtn from "./TinyBtn";
import store from "../assets/icons/gems.webp";
import rank from "../assets/icons/rank.webp";
import news from "../assets/icons/news.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import report from "../assets/icons/robot2.webp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";

export default function Aside() {
  const { addAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  function underDev() {
    addAlert("Under development", "normal");
  }

  return (
    <div className={styles.Aside}>
      <div className={styles.left}>
        <TinyBtn text="shop" onClick={() => navigate("/shop")} icon={store} />
        <TinyBtn
          text="ranking"
          onClick={underDev}
          icon={rank}
          disabled={true}
        />
        <TinyBtn
          text="friend"
          onClick={underDev}
          icon={friend}
          disabled={true}
        />
      </div>
      <div className={styles.right}>
        <TinyBtn
          text="report"
          onClick={underDev}
          icon={report}
          disabled={true}
        />
        <TinyBtn text="news" onClick={underDev} icon={news} disabled={true} />
        <TinyBtn text="log" onClick={underDev} icon={board} disabled={true} />
      </div>
    </div>
  );
}
