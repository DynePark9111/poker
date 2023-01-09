import { Outlet } from "react-router-dom";
import styles from "../../styles/layout/Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <div className={styles.ribbon} />
      <Outlet />
    </div>
  );
}
