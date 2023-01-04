import Background from "../components/Background";
import GameTable from "../components/GameTable";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Background />
      <Profile />
      <Wallet />
      <GameTable />
    </div>
  );
}
