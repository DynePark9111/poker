import { ReactNode } from "react";
import styles from "../styles/Btn.module.scss";

type BtnProps = {
  children: ReactNode;
  color?: string;
};

const defaultColor = "#495479";

export default function Btn({ children, color = defaultColor }: BtnProps) {
  return (
    <button className={styles.Btn} style={{ background: color }}>
      <div className={styles.shadowTop} />
      <div className={styles.shadowBottom} />
      {children}
    </button>
  );
}
