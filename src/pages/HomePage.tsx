import Aside from "../components/Aside";
import Background from "../components/Background";
import Events from "../components/Events";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import styles from "../styles/HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Background />
      <Menu />
      <Profile />
      <Wallet />
      {/* <PlayBtn /> */}
      <Aside />
      <Events />
    </div>
  );
}