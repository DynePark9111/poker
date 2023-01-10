import styles from "../../styles/poker/PayTable.module.scss";
import {
  PAY_TABLE,
  PROBABILITY_TABLE,
  RANK,
  RANK_TYPE,
} from "../../types/types";

export default function PayTable() {
  return (
    <table className={styles.PayTable}>
      <thead>
        <tr>
          <th>Hand</th>
          <th>Pay</th>
          <th>Probability(%)</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(PAY_TABLE)
          .slice(1)
          .map((pay: string) => {
            return (
              <tr key={pay}>
                <th>{RANK[pay as RANK_TYPE]}</th>
                <td>{PAY_TABLE[pay as RANK_TYPE]}</td>
                <td>{PROBABILITY_TABLE[pay as RANK_TYPE]}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
