import React, { useState, useEffect } from "react";
import ReviewList from "../components/reviews/ReviewList";

function AllReviewsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedReviews, setloadedReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://my-restaurant-reviews-default-rtdb.europe-west1.firebasedatabase.app/reviews.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const reviews = [];
        for (const key in data) {
          const review = {
            id: key,
            ...data[key],
          };
          reviews.push(review);
        }
        setLoading(false);
        setloadedReviews(reviews);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div>
        <h1>All Reviews</h1>
        <ReviewList items={loadedReviews} />
      </div>
    </React.Fragment>
  );
}

export default AllReviewsPage;
