import styles from "../styles/pages/ShopPage.module.scss";
import Lnb from "../components/Lnb";
import Background from "../components/Background";
import { ReactNode } from "react";

export default function ShopPage() {
  return (
    <div className={styles.ShopPage}>
      <Background />
      <Lnb title="Shop" />
      <div className={styles.shop}>
        <LargeContainer header="GREEN PACKS">
          {SHOP_GEMS.map((gem) => {
            return (
              <SmallContainer
                price={gem.price}
                amount={gem.amount}
                image={gem.image}
                tag={gem.tag}
              />
            );
          })}
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
  return (
    <div className={styles.SmallContainer}>
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

const SHOP_GEMS: SmallContainer[] = [
  { price: 3, amount: 30, image: "/src/assets/icons/gems1.webp" },
  { price: 7, amount: 80, image: "/src/assets/icons/gems1.webp" },
  {
    price: 15,
    amount: 170,
    image: "/src/assets/icons/gems2.webp",
    tag: "POPULAR",
  },
  { price: 30, amount: 350, image: "/src/assets/icons/gems2.webp" },
  { price: 90, amount: 950, image: "/src/assets/icons/gems3.webp" },
  {
    price: 150,
    amount: 2000,
    image: "/src/assets/icons/gems3.webp",
    tag: "BEST VALUE",
  },
];
