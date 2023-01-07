import Lottie from "lottie-react";
import styles from "../styles/LottieImage.module.scss";

type ConfettiProps = {
  image: any;
  play: boolean;
  loop?: boolean;
};

export default function LottieImage({
  image,
  play,
  loop = true,
}: ConfettiProps) {
  return (
    <>
      {play && (
        <div className={styles.LottieImage}>
          <Lottie animationData={image} loop={loop} />
        </div>
      )}
    </>
  );
}
