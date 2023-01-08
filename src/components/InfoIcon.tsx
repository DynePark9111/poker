import styles from "../styles/InfoIcon.module.scss";
import about from "../assets/icons/info.webp";

export default function InfoIcon() {
  return (
    <div className={styles.InfoIcon}>
      <img src={about} alt={about} />
    </div>
  );
}
