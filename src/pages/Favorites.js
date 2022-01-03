import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ReviewList from "../components/reviews/ReviewList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet.</p>;
  } else {
    content = <ReviewList items={favoritesCtx.favorites} />;
  }

  return (
    <React.Fragment>
      <div>
        <h1>My Favorites</h1>
        {content}
      </div>
    </React.Fragment>
  );
}

export default FavoritesPage;
