import styles from "../styles/pages/ShopPage.module.scss";
import Lnb from "../components/Lnb";
import { ReactNode, useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";
import gems1 from "../assets/icons/gems1.webp";
import gems2 from "../assets/icons/gems2.webp";
import gems3 from "../assets/icons/gems3.webp";

export default function ShopPage() {
  return (
    <div className={styles.ShopPage}>
      <Lnb title="Shop" />
      <div className={styles.shop}>
        <LargeContainer header="GREEN PACKS">
          <SmallContainer price={3} amount={30} image={gems1} />
          <SmallContainer price={7} amount={80} image={gems1} />
          <SmallContainer price={15} amount={170} image={gems2} tag="POPULAR" />
          <SmallContainer price={30} amount={350} image={gems2} />
          <SmallContainer price={90} amount={350} image={gems3} />
          <SmallContainer
            price={150}
            amount={950}
            image={gems3}
            tag="BEST VALUE"
          />
        </LargeContainer>
      </div>
    </div>
  );
}

function LargeContainer({ children, header }: LargeContainerProps) {
  return (
    <div className={styles.LargeContainer}>
      <header>{header}</header>
      <section>{children}</section>
    </div>
  );
}

function SmallContainer({ image, amount, price, tag }: SmallContainer) {
  const { addAlert } = useContext(AlertContext);
  return (
    <div
      className={styles.SmallContainer}
      onClick={() => addAlert("Shop not available", "error")}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt="gems" />
        {tag && <div className={styles.tag}>{tag}</div>}
      </div>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.price}>${price}</div>
    </div>
  );
}

type LargeContainerProps = {
  children: ReactNode;
  header: string;
};

type SmallContainer = {
  image: string;
  amount: number;
  price: number;
  tag?: string;
};
