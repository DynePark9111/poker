import { useState } from "react";
import Background from "../components/Background";
import GameTable from "../components/GameTable";
import PlayBtn from "../components/PlayBtn";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import styles from "../styles/PokerPage.module.scss";

export default function PokerPage() {
  const [multi, setMulti] = useState(4);
  return (
    <div className={styles.PokerPage}>
      <Background />
      <Profile />
      <Wallet />
      <GameTable multi={multi} />
      <PlayBtn />
    </div>
  );
}
