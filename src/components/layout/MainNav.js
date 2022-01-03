import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Restaurant Reviews</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Reviews</Link>
          </li>
          <li>
            <Link to="/new-review">New Review</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
