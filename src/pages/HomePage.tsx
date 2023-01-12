import { useContext } from "react";
import Aside from "../components/Aside";
import Events from "../components/Events";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import PayTable from "../components/poker/PayTable";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import Window from "../components/Window";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/pages/HomePage.module.scss";

export default function HomePage() {
  const { activeModal } = useContext(ModalContext);

  return (
    <div className={styles.HomePage}>
      <Menu />
      <Profile />
      <Wallet />
      <Aside />
      <Events />
      <Modal isOpen={activeModal === "poker"}>
        <Window>
          <PayTable />
        </Window>
      </Modal>
    </div>
  );
}
