import styles from "../styles/Profile.module.scss";
import profileImage from "../assets/icons/profile.webp";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Profile} onClick={() => navigate("/my")}>
      <Btn>
        <div className={styles.wrapper}>
          <img src={profileImage} alt="profile" />
          <div className={styles.userName}>{user.username}</div>
        </div>
      </Btn>
    </div>
  );
}
