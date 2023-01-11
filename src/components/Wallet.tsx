import styles from "../styles/Wallet.module.scss";
import greenGem from "../assets/icons/gem_green.webp";
import purpleGem from "../assets/icons/gem_purple.webp";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Wallet() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Wallet}>
      <WalletItem image={purpleGem} amount={user.gem} />
      <WalletItem image={greenGem} amount={user.cash} />
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

type WalletItemProps = {
  image: string;
  amount: number;
};
