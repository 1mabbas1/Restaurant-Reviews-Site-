import React from "react";
import ReviewList from "../components/reviews/ReviewList";

const DUMMY = [
  {
    id: "r1",
    title: "Gokyuzu",
    img: "https://gokyuzurestaurant.co.uk/wp-content/uploads/2016/12/Gokyuzu-Chingford_508.jpg",
    location: "London",
    rating: "6/10",
    review: "bla bla bla",
  },

  {
    id: "r2",
    title: "Banana Tree",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/15/36/4d/33/bun-bo-noodle-salad.jpg",
    location: "London",
    rating: "4/10",
    review: "bla bla bla",
  },
];

function AllReviewsPage() {
  return (
    <React.Fragment>
      <div>
        <h1>All Reviews</h1>
        <ReviewList items={DUMMY} />
      </div>
    </React.Fragment>
  );
}

export default AllReviewsPage;
