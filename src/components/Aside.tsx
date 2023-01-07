import styles from "../styles/Aside.module.scss";
import TinyBtn from "./TinyBtn";
import store from "../assets/icons/gems.webp";
import rank from "../assets/icons/rank.webp";
import news from "../assets/icons/news.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import report from "../assets/icons/robot2.webp";

export default function Aside() {
  return (
    <div className={styles.Aside}>
      <div className={styles.left}>
        <TinyBtn text="shop" link="/test" icon={store} />
        <TinyBtn text="ranking" link="/test" icon={rank} disabled={true} />
        <TinyBtn text="friend" link="/test" icon={friend} disabled={true} />
      </div>
      <div className={styles.right}>
        <TinyBtn text="report" link="/test" icon={report} disabled={true} />
        <TinyBtn text="news" link="/test" icon={news} disabled={true} />
        <TinyBtn text="log" link="/test" icon={board} disabled={true} />
      </div>
    </div>
  );
}
