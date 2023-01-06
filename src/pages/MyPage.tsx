import Background from "../components/Background";
import Lnb from "../components/Lnb";
import styles from "../styles/MyPage.module.scss";
import profileImage from "../assets/profile.webp";
import Btn from "../components/Btn";
import rank from "../assets/cards/rank.webp";
import trophy from "../assets/cards/trophy.webp";
import duel from "../assets/cards/duel.webp";
import star from "../assets/cards/star.webp";
import gem4 from "../assets/cards/gem4.webp";
import zone from "../assets/cards/zone.webp";
import robot from "../assets/cards/robot.webp";
import robot2 from "../assets/cards/robot2.webp";
import robot3 from "../assets/cards/robot3.webp";
import { FaCog } from "react-icons/fa";
import ListItem from "../components/ListItem";

export default function MyPage() {
  let user = {
    _id: "123",
    userName: "userName",
  };
  return (
    <div className={styles.MyPage}>
      <Background color="#024BC1" />
      <Lnb title={user.userName} />
      <MyPageContent />
    </div>
  );
}

function MyPageContent() {
  return (
    <div className={styles.MyPageContent}>
      <MyPageTop />
      <MyPageBottom />
    </div>
  );
}

const userName = "userName";

function MyPageTop() {
  return (
    <div className={styles.top}>
      <div className={styles.icon}>
        <div className={styles.cog}>
          <FaCog />
        </div>
        <img src={profileImage} alt={userName} />
        <div className={styles.userId}>userId</div>
      </div>
      <div className={styles.userName}>
        <div className={styles.cog}>
          <FaCog />
        </div>
        <Btn color="#343C4F">
          <div className={styles.wrapper}>{userName}</div>
        </Btn>
      </div>
      <div className={styles.nameColor}>
        <div className={styles.cog}>
          <FaCog />
        </div>
        <Btn color="#2171FF">
          <div className={styles.wrapper}>
            Name <br /> Color
          </div>
        </Btn>
      </div>
    </div>
  );
}

function MyPageBottom() {
  return (
    <ul className={styles.bottom}>
      <ListItem label="HIGHEST TROPIES" icon={trophy} count={99} />
      <ListItem label="HIGHEST RANKS" icon={rank} count={1} />
      <ListItem label="STARS COLLECTED" icon={star} count={1213} />
      <ListItem label="GEMS COLLECTED" icon={gem4} count={112312} />
      <ListItem label="GAMES PLAYED" icon={duel} count={121233} />
      <ListItem label="ZONE PROTECTED" icon={zone} count={112323} />
      <ListItem label="ROBOT A DEFEATED" icon={robot} count={98346} />
      <ListItem label="ROBOT B DEFEATED" icon={robot2} count={12312} />
      <ListItem label="ROBOT C DEFEATED" icon={robot3} count={0} />
    </ul>
  );
}
