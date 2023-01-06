import styles from "../styles/ListItem.module.scss";

type ListItemProps = {
  label?: string;
  icon: string;
  count: number;
};

export default function ListItem({ label, icon, count }: ListItemProps) {
  return (
    <li className={styles.ListItem}>
      <div className={styles.label}>{label}</div>
      <img src={icon} className={styles.icon} />
      <div className={styles.text}>{count.toLocaleString()}</div>
    </li>
  );
}
