import styles from "../../styles/AuthLayout.module.scss";
import { Outlet } from "react-router-dom";
import Background from "../Background";

export default function AuthLayout() {
  return (
    <div className={styles.AuthLayout}>
      <Background />
      {/* <h1>DP</h1> */}
      <Outlet />
    </div>
  );
}
