import styles from "../styles/Wallet.module.scss";
import greenGem from "../assets/icons/gem_green.webp";
import purpleGem from "../assets/icons/gem_purple.webp";

type WalletItemProps = {
  image: string;
  amount: number;
};

export default function Wallet() {
  return (
    <div className={styles.Wallet}>
      <WalletItem image={purpleGem} amount={100} />
      <WalletItem image={greenGem} amount={1132131232} />
    </div>
  );
}

function WalletItem({ image, amount }: WalletItemProps) {
  return (
    <div className={styles.WalletItem}>
      <img src={image} alt={image} />
      <div className={styles.amount}>{amount.toLocaleString()}</div>
    </div>
  );
}
