import styles from "../../styles/layout/AuthLayout.module.scss";
import { Outlet } from "react-router-dom";
import Background from "../Background";

export default function AuthLayout() {
  return (
    <div className={styles.AuthLayout}>
      <Background color="#04122e" />
      <Outlet />
    </div>
  );
}
