import styles from "../styles/Total.module.scss";
import gems from "../assets/icons/gems.webp";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

type TotalProps = {
  total: number;
  spend: number;
  isClaim: boolean;
};

export default function Total({ total, isClaim, spend }: TotalProps) {
  const [earned, setEarned] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    setEarned((prev) => prev + total);
    setSpent((prev) => prev + spend);
  }, [total, spend]);

  return (
    <div className={styles.Total}>
      <ListItem label="TOTAL EARNED" icon={gems} count={earned} />
      <ListItem label="TOTAL SPENT" icon={gems} count={spent} />
      <div className={styles.result} id={isClaim ? styles.show : styles.hide}>
        + {total}
      </div>
    </div>
  );
}
