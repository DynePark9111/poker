import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from "../../styles/layout/Layout.module.scss";

export default function Layout() {
  const { checkUser } = useContext(UserContext);

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className={styles.Layout}>
      <div className={styles.ribbon} />
      <Outlet />
    </div>
  );
}
