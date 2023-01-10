import { useContext } from "react";
import { ReactNode } from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/Window.module.scss";
import Btn from "./Btn";

type WindowProps = {
  children: ReactNode;
};

export default function Window({ children }: WindowProps) {
  const { setActiveModal } = useContext(ModalContext);
  return (
    <div className={styles.Window}>
      <header>
        <div className={styles.title}>Jacks or Better</div>
        <div className={styles.closeBtn} onClick={() => setActiveModal("")}>
          <Btn color="#e4301f">
            <div className={styles.xIcon}>X</div>
          </Btn>
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
}
