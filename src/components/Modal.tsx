import { ReactNode } from "react";
import styles from "../styles/Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, toggle, children }: ModalProps) {
  return (
    <div className={styles.Modal}>
      {isOpen && (
        <>
          <div
            className={styles.bg}
            onClick={(e) => {
              toggle();
              e.stopPropagation();
            }}
          />
          {children}
        </>
      )}
    </div>
  );
}
