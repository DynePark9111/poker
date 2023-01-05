import styles from "../styles/Profile.module.scss";
import profileImage from "../assets/profile.webp";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className={styles.Profile} onClick={() => navigate("./my")}>
      <Btn>
        <div className={styles.wrapper}>
          <img src={profileImage} alt="profile" />
          <div className={styles.userName}>userName</div>
        </div>
      </Btn>
    </div>
  );
}
