import { ReactNode } from "react";
import styles from "../styles/Btn.module.scss";

type BtnProps = {
  children: ReactNode;
  color?: string;
  onClick?: any;
};

const defaultColor = "#343c4f";

export default function Btn({
  children,
  color = defaultColor,
  onClick,
}: BtnProps) {
  return (
    <button
      className={styles.Btn}
      style={{ background: color }}
      onClick={onClick}
    >
      <div className={styles.shadowTop} />
      <div className={styles.shadowBottom} />
      {children}
    </button>
  );
}
