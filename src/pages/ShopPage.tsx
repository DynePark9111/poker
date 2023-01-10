import styles from "../styles/pages/ShopPage.module.scss";
import Lnb from "../components/Lnb";
import Background from "../components/Background";
import { ReactNode } from "react";
import gems1 from "../assets/icons/gems1.webp";
import gems2 from "../assets/icons/gems2.webp";
import gems3 from "../assets/icons/gems3.webp";

export default function ShopPage() {
  const bgPurple = ``;
  return (
    <>
      <Background />
      <Lnb title="Shop" />
      <div className={styles.ShopPage}>
        <LargeContainer header="GREEN PACKS">
          <SmallContainer price={3} amount={30} image={gems1} />
          <SmallContainer price={7} amount={80} image={gems1} />
          <SmallContainer price={15} amount={170} image={gems2} tag="POPULAR" />
          <SmallContainer price={30} amount={350} image={gems2} />
          <SmallContainer price={90} amount={950} image={gems3} />
          <SmallContainer
            price={150}
            amount={2000}
            image={gems3}
            tag="BEST VALUE"
          />
        </LargeContainer>
      </div>
    </>
  );
}

type LargeContainerProps = {
  children: ReactNode;
  header: string;
};

function LargeContainer({ children, header }: LargeContainerProps) {
  return (
    <div className={styles.LargeContainer}>
      <header>{header}</header>
      <section>{children}</section>
    </div>
  );
}

type SmallContainer = {
  image: string;
  amount: number;
  price: number;
  tag?: string;
};

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

// function Slider() {
//   return (
//     <div className={styles.Slider}>
//       <header>{header}</header>
//       <section>{children}</section>
//     </div>
//   );
// }
