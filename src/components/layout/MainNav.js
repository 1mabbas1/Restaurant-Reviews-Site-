import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);
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
            <Link to="/favorites">
              My Favorites
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
