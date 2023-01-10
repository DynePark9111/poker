import { Link } from "react-router-dom";
import Background from "../components/Background";
import styles from "../styles/pages/NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.NotFoundPage}>
      <Background color="#330000" />
      <div className={styles.text}>
        <h1>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <h5>The page you are looking for is unavailable.</h5>
        <Link to="/">
          <button>GO TO HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
}
