import Lottie from "lottie-react";
import styles from "../styles/LottieImage.module.scss";

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

type ConfettiProps = {
  image: any;
  play: boolean;
  loop?: boolean;
};
