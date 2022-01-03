import styles from "./ReviewItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function ReviewItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const isFave = favoritesCtx.itemIsFavorite(props.id);

  function favesHandler() {
    if (isFave) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        img: props.img,
        location: props.location,
        rating: props.rating,
        review: props.review,
      });
    }
  }

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.location}</p>
          <h3>{props.rating}</h3>
          <p>{props.review}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={favesHandler}>
            {isFave ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default ReviewItem;
