import { ReactNode } from "react";
import styles from "../styles/Btn.module.scss";

type BtnProps = {
  children: ReactNode;
  color?: string;
  onClick?: any;
  disabled?: boolean;
};

const defaultColor = "#343c4f";

export default function Btn({
  children,
  color = defaultColor,
  onClick,
  disabled = false,
}: BtnProps) {
  return (
    <button
      className={styles.Btn}
      id={disabled ? styles.disabled : ""}
      style={{ background: color }}
      onClick={onClick}
    >
      <div className={styles.shadowTop} />
      <div className={styles.shadowBottom} />
      {children}
    </button>
  );
}
