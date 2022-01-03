import styles from "./ReviewItem.module.css";
import Card from "../UI/Card";

function ReviewItem(props) {
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
          <button>Add to faves</button>
        </div>
      </li>
    </Card>
  );
}

export default ReviewItem;
