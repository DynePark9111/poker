import { useContext, useState } from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import Lnb from "../components/Lnb";
import Modal from "../components/Modal";
import OnOff from "../components/OnOff";
import { AlertContext } from "../contexts/AlertContext";
import { DarkmodeContext } from "../contexts/DarkmodeContext";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/pages/SettingsPage.module.scss";
import { clearCookie, clearLocalStorage } from "../utils/localStorage";

export default function SettingsPage() {
  const { isDark, toggleDarkmode } = useContext(DarkmodeContext);
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const { addAlert } = useContext(AlertContext);

  function onClickYes() {
    clearCookie();
    clearLocalStorage();
    addAlert("Cookie, local storage cleared", "success");
    setActiveModal("");
  }

  return (
    <div className={styles.SettingsPage}>
      <Background />
      <Lnb title="Settings" />
      <section>
        <OnOff title="DARKMODE" isOn={isDark} toggle={toggleDarkmode} />
      </section>
      <section>
        <Btn onClick={() => setActiveModal("reset")}>
          <div className={styles.clear}>RESET ALL</div>
        </Btn>
      </section>
      <Modal isOpen={activeModal === "reset"}>
        <Confirm
          question="Do you wish to erase all personal settings?"
          onClick={onClickYes}
        />
      </Modal>
    </div>
  );
}

type confrirmProps = {
  question: string;
  onClick: () => void;
};

function Confirm({ question, onClick }: confrirmProps) {
  const { setActiveModal } = useContext(ModalContext);

  return (
    <div className={styles.Confirm}>
      <h2>{question}</h2>
      <div className={styles.buttons}>
        <Btn onClick={onClick}>
          <div className={styles.yes}>DELETE</div>
        </Btn>
        <Btn onClick={() => setActiveModal("0")}>
          <div className={styles.no}>CANCEL</div>
        </Btn>
      </div>
    </div>
  );
}
