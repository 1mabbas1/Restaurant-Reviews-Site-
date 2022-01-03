import React from "react";
import NewReviewForm from "../components/reviews/NewReviewForm";

function NewReviewPage() {
  function onAddReviewHandler(reviewData) {
    fetch(
      "https://my-restaurant-reviews-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
      {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return (
    <React.Fragment>
      <h1>New Review</h1>
      <NewReviewForm onAddReview={onAddReviewHandler} />
    </React.Fragment>
  );
}

export default NewReviewPage;
