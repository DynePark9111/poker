import { useContext } from "react";
import { ReactNode } from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/Modal.module.scss";

export default function Modal({ isOpen, children }: ModalProps) {
  const { setActiveModal } = useContext(ModalContext);

  return (
    <div className={styles.Modal} id={isOpen ? styles.show : styles.hide}>
      <div className={styles.bg} onClick={() => setActiveModal("")} />
      {children}
    </div>
  );
}

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};
