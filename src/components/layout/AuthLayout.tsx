import styles from "../../styles/layout/AuthLayout.module.scss";
import { Outlet } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function AuthLayout() {
  const RECAPTCHA_CLIENT_KEY = import.meta.env.VITE_RECAPTCHA_CLIENT_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_CLIENT_KEY as string}>
      <div className={styles.AuthLayout}>
        <Outlet />
      </div>
    </GoogleReCaptchaProvider>
  );
}
