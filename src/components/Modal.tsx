import { ReactNode } from "react";
import styles from "../styles/Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, toggle, children }: ModalProps) {
  return (
    <div
      className={styles.Modal}
      id={isOpen ? styles.show : ""}
      onClick={toggle}
    >
      {children}
    </div>
  );
}
