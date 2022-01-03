import styles from "./NewReview.module.css";
import Card from "../UI/Card";
import { useRef } from "react";

function NewReviewForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const locationInputRef = useRef();
  const ratingInputRef = useRef();
  const reviewInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredReview = reviewInputRef.current.value;

    const reviewData = {
      title: enteredTitle,
      location: enteredLocation,
      img: enteredImage,
      rating: enteredRating,
      review: enteredReview,
    };
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Restaurant Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="img">Image URL</label>
          <input type="url" required id="img" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="location">Location</label>
          <input type="text" required id="location" ref={locationInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="rating">Rating</label>
          <input type="text" required id="rating" ref={ratingInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="review">Review</label>
          <textarea
            type="text"
            required
            id="review"
            rows="7"
            ref={reviewInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewReviewForm;
