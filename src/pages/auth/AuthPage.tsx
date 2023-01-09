import { Link } from "react-router-dom";
import styles from "../../styles/pages/auth/AuthPage.module.scss";
import { IoMailOutline } from "react-icons/io5";

export default function AuthPage() {
  return (
    <div className={styles.AuthPage}>
      <div className={styles.text}>
        DP
        <br />
        non-profit hobby website
      </div>
      <Link to="/auth/login">
        <button>
          <IoMailOutline />
          <span>LOGIN</span>
        </button>
      </Link>
      <div className={styles.signup}>
        <Link to="/auth/signup">Signup</Link>
        <Link to="/auth/social">Social Account</Link>
      </div>
    </div>
  );
}
