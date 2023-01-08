import styles from "../styles/Background.module.scss";
import chip from "../assets/icons/chip.svg";

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
const defaultColor = `#000e21`;
// const defaultColor = `#264482`;
// const defaultColor = `red`;
// const defaultColor = `blue`;
// const defaultColor = `green`;
// const defaultColor = `gold`;

export default function Background({
  icon = chip,
  color = defaultColor,
  gradient = defaultGradient,
}: BackgroundProps) {
  return (
    <div className={styles.Background}>
      <div
        className={styles.bg}
        style={{
          backgroundColor: color,
        }}
      />
      <div
        className={styles.icon}
        style={{
          backgroundImage: `url(${icon})`,
          backgroundColor: color,
        }}
      />
      <div className={styles.bgColor} style={{ background: gradient }} />
    </div>
  );
}
