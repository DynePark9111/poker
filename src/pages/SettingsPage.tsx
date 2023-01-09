import { useContext, useState } from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import Lnb from "../components/Lnb";
import OnOff from "../components/OnOff";
import { AlertContext } from "../contexts/AlertContext";
import { darkmodeContext } from "../contexts/DarkmodeContext";
import styles from "../styles/pages/SettingsPage.module.scss";

export default function SettingsPage() {
  const { isDark, toggleDarkmode } = useContext(darkmodeContext);
  const { addAlert } = useContext(AlertContext);
  const [x, setX] = useState(true);
  const [y, setY] = useState(true);

  function toggleX() {
    addAlert("Under development", "error");
    setX((prev) => !prev);
  }
  function toggleY() {
    addAlert("Under development", "error");
    setY((prev) => !prev);
  }

  function clearCookie() {
    if (confirm("are you sure you want to clear cookies?")) {
      addAlert("Cookies cleared", "error");
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    }
  }

  function clearLocalStorage() {
    if (confirm("are you sure you want to clear local storage?")) {
      addAlert("Local Storage Cleared", "error");
      localStorage.clear();
    }
  }

  return (
    <div className={styles.SettingsPage}>
      <Background />
      <Lnb title="Settings" />
      <div className={styles.switches}>
        <OnOff title="DARKMODE" isOn={isDark} toggle={toggleDarkmode} />
        <OnOff title="MUSIC*" isOn={x} toggle={toggleX} />
        <OnOff title="ANIMATION*" isOn={y} toggle={toggleY} />
        <Btn color="#2270ff" onClick={clearCookie}>
          <div className={styles.clear}>CLEAR COOKIE</div>
        </Btn>
        <Btn color="#2270ff" onClick={clearLocalStorage}>
          <div className={styles.clear}>CLEAR LOCAL STORAGE</div>
        </Btn>
      </div>
    </div>
  );
}
