import styles from "../styles/Profile.module.scss";
import profileImage from "../assets/profile.webp";
import Btn from "./Btn";

export default function Profile() {
  return (
    <div className={styles.Profile}>
      <Btn>
        <div className={styles.wrapper}>
          <img src={profileImage} alt="profile" />
          <div className={styles.userName}>userName</div>
        </div>
      </Btn>
    </div>
  );
}
