import styles from "../styles/Total.module.scss";
import { PAY_TABLE, PAY_TABLE_TYPE } from "../types/types";
import gem from "../assets/cards/gem4.webp";
import ListItem from "./ListItem";

type TotalProps = {
  result: PAY_TABLE_TYPE;
};

export default function Total({ result }: TotalProps) {
  return (
    <div className={styles.Total}>
      <ListItem label="TOTAL" icon={gem} count={PAY_TABLE[result]} />
    </div>
  );
}
