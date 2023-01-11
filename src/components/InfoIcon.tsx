import styles from "../styles/InfoIcon.module.scss";
import about from "../assets/icons/info.webp";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { AlertContext } from "../contexts/AlertContext";

export default function InfoIcon({ open }: InfoIconProps) {
  const { addAlert } = useContext(AlertContext);
  const { setActiveModal } = useContext(ModalContext);

  function onClickInfoIcon() {
    open === ""
      ? addAlert("Under development", "error")
      : setActiveModal(open as string);
  }

  return (
    <div className={styles.InfoIcon} onClick={onClickInfoIcon}>
      <img src={about} alt={about} />
    </div>
  );
}

type InfoIconProps = {
  open?: string;
};
