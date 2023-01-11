import Background from "../components/Background";
import Lnb from "../components/Lnb";
import styles from "../styles/pages/MyPage.module.scss";
import profileImage from "../assets/icons/profile.webp";
import Btn from "../components/Btn";
import rank from "../assets/icons/rank.webp";
import trophy from "../assets/icons/trophy.webp";
import duel from "../assets/icons/duel.webp";
import star from "../assets/icons/star.webp";
import gems from "../assets/icons/gems.webp";
import zone from "../assets/icons/zone.webp";
import robot from "../assets/icons/robot.webp";
import robot2 from "../assets/icons/robot2.webp";
import robot3 from "../assets/icons/robot3.webp";
import { FaCog } from "react-icons/fa";
import ListItem from "../components/ListItem";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { AlertContext } from "../contexts/AlertContext";

export default function MyPage() {
  return (
    <div className={styles.MyPage}>
      <Background color="#024BC1" />
      <Lnb title="My" />
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

function MyPageTop() {
  const { user } = useContext(UserContext);
  const { addAlert } = useContext(AlertContext);

  function underDev() {
    addAlert("Under development", "error");
  }

  return (
    <div className={styles.top}>
      <div className={styles.icon} onClick={underDev}>
        <div className={styles.cog}>
          <FaCog />
        </div>
        <img src={profileImage} alt={user.username} />
        <div className={styles.userId}>{user._id}</div>
      </div>

      <div className={styles.userName} onClick={underDev}>
        <div className={styles.cog}>
          <FaCog />
        </div>
        <Btn color="#343C4F">
          <div className={styles.wrapper}>{user.username}</div>
        </Btn>
      </div>

      <div className={styles.nameColor} onClick={underDev}>
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
      <ListItem label="HIGHEST TROPIES" icon={trophy} count={1} />
      <ListItem label="HIGHEST RANKS" icon={rank} count={123} />
      <ListItem label="STARS COLLECTED" icon={star} count={4567} />
      <ListItem label="GEMS COLLECTED" icon={gems} count={89012} />
      <ListItem label="GAMES PLAYED" icon={duel} count={999999} />
      <ListItem label="ZONE PROTECTED" icon={zone} count={1234567} />
      <ListItem label="ROBOT A DEFEATED" icon={robot} count={0} />
      <ListItem label="ROBOT B DEFEATED" icon={robot2} count={0} />
      <ListItem label="ROBOT C DEFEATED" icon={robot3} count={0} />
    </ul>
  );
}
