import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Lnb.module.scss";
import Btn from "./Btn";

export default function Lnb({ title }: LnbProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.Lnb}>
      <Btn>
        <div className={styles.btn} onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>
      </Btn>
      <div className={styles.title}>{title}</div>
      <Btn>
        <div className={styles.btn} onClick={() => navigate("/")}>
          <FaHome />
        </div>
      </Btn>
    </div>
  );
}

type LnbProps = {
  title?: string;
};
