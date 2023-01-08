import styles from "../styles/TinyBtn.module.scss";
import Btn from "./Btn";

type TinyBtnProps = {
  text: string;
  onClick: () => void;
  icon: string;
  disabled?: boolean;
};

export default function TinyBtn({
  text,
  icon,
  disabled,
  onClick,
}: TinyBtnProps) {
  return (
    <div
      className={styles.TinyBtn}
      id={disabled ? "disabled" : ""}
      onClick={onClick}
    >
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <Btn>
        <div className={styles.wrapper}>{text.toUpperCase()}</div>
      </Btn>
    </div>
  );
}
