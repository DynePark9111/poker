import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/TinyBtn.module.scss";
import Btn from "./Btn";

type TinyBtnProps = {
  text: string;
  link: string;
  icon: string;
  disabled?: boolean;
};

export default function TinyBtn({ text, link, icon, disabled }: TinyBtnProps) {
  return (
    <Link to={link}>
      <div className={styles.TinyBtn} id={disabled ? "disabled" : ""}>
        <div className={styles.icon}>
          <img src={icon} />
        </div>
        <Btn>
          <div className={styles.wrapper}>{text.toUpperCase()}</div>
        </Btn>
      </div>
    </Link>
  );
}
