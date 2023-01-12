import styles from "../styles/Background.module.scss";
import chip from "../assets/images/chip.svg";

export default function Background({
  icon = chip,
  color,
  gradient = defaultGradient,
}: BackgroundProps) {
  return (
    <div className={styles.Background}>
      <div className={styles.bg} style={{ backgroundColor: color }} />
      <div
        className={styles.icon}
        style={{ backgroundImage: `url(${icon})`, backgroundColor: color }}
      />
      <div className={styles.gradient} style={{ background: gradient }} />
    </div>
  );
}

type BackgroundProps = {
  icon?: string;
  color?: string;
  gradient?: string;
};

const defaultGradient = `linear-gradient(
  to right bottom,
  rgba(0, 14, 33, 0.3) 50%,
  rgba(154, 186, 54, 0.3)
)`;
