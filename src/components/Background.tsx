import styles from "../styles/Background.module.scss";
import chip from "../assets/chip.svg";

type BackgroundProps = {
  icon?: string;
  background?: string;
  gradient?: string;
};

const defaultGradient = `linear-gradient(
  to right bottom,
  rgba(0, 14, 33, 0.3) 50%,
  rgba(154, 186, 54, 0.3)
)`;
// const defaultBackground = `#000e21`;
const defaultBackground = `#264482`;
// const defaultBackground = `red`;
// const defaultBackground = `blue`;
// const defaultBackground = `green`;
// const defaultBackground = `gold`;

export default function Background({
  icon = chip,
  background = defaultBackground,
  gradient = defaultGradient,
}: BackgroundProps) {
  return (
    <div className={styles.Background}>
      <div
        className={styles.bg}
        style={{
          backgroundColor: defaultBackground,
        }}
      />
      <div
        className={styles.icon}
        style={{
          backgroundImage: `url(${icon})`,
          backgroundColor: defaultBackground,
        }}
      />
      <div className={styles.bgColor} style={{ background: defaultGradient }} />
    </div>
  );
}
