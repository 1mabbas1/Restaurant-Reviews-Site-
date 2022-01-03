import styles from "./ReviewList.module.css";
import ReviewItem from "./ReviewItem";

function ReviewList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <ReviewItem
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          location={item.location}
          rating={item.rating}
          review={item.review}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
