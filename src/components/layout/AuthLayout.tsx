import styles from "../../styles/layout/AuthLayout.module.scss";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className={styles.AuthLayout}>
      <Outlet />
    </div>
  );
}
