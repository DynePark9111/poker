import { useState } from "react";
import Aside from "../components/Aside";
import Background from "../components/Background";
import Events from "../components/Events";
import GameTable from "../components/GameTable";
import PlayBtn from "../components/PlayBtn";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import styles from "../styles/HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Background />
      <Profile />
      <Wallet />
      {/* <PlayBtn /> */}
      <Aside />
      <Events />
    </div>
  );
}
