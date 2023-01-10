import styles from "../styles/InfoIcon.module.scss";
import about from "../assets/icons/info.webp";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

type InfoIconProps = {
  open: string;
};

export default function InfoIcon({ open = "" }: InfoIconProps) {
  const { setActiveModal } = useContext(ModalContext);
  return (
    <div className={styles.InfoIcon} onClick={() => setActiveModal(open)}>
      <img src={about} alt={about} />
    </div>
  );
}
