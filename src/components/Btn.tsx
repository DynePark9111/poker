import { ReactNode } from "react";
import styles from "../styles/Btn.module.scss";

export default function Btn({
  children,
  color,
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

type BtnProps = {
  children: ReactNode;
  color?: string;
  onClick?: any;
  disabled?: boolean;
};
