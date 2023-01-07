import styles from "../styles/Total.module.scss";
import { PAY_TABLE, PAY_TABLE_TYPE } from "../types/types";
import gems from "../assets/icons/gems.webp";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

type TotalProps = {
  result: PAY_TABLE_TYPE;
  isClaim: boolean;
};

export default function Total({ result, isClaim }: TotalProps) {
  const [earned, setEarned] = useState(0);
  useEffect(() => {
    setEarned((prev) => prev + PAY_TABLE[result]);
  }, [result]);

  return (
    <div className={styles.Total}>
      <ListItem label="TOTAL EARNED" icon={gems} count={earned} />
      <div className={styles.result} id={isClaim ? styles.show : styles.hide}>
        + {PAY_TABLE[result]}
      </div>
    </div>
  );
}
