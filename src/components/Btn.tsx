import { ReactNode } from "react";
import styles from "../styles/Btn.module.scss";

type BtnProps = {
  children: ReactNode;
};

export default function Btn({ children }: BtnProps) {
  return (
    <button className={styles.Btn}>
      <div className={styles.shadowTop} />
      <div className={styles.shadowBottom} />
      {children}
    </button>
  );
}
