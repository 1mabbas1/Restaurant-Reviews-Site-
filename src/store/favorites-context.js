import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (newFave) => {},
  removeFavorite: (reviewId) => {},
  itemIsFavorite: (reviewId) => {},
});

export function FavoritesContextProvider(props) {
  const [myFaves, setMyFaves] = useState([]);

  function addFavesHandler(newFave) {
    setMyFaves((prevFaves) => {
      return prevFaves.concat(newFave);
    });
  }

  function removeFavesHandler(reviewId) {
    setMyFaves((prevFaves) => {
      return prevFaves.filter((review) => review.id !== reviewId);
    });
  }

  function itemIsFaveHandler(reviewId) {
    return myFaves.some((review) => review.id === reviewId);
  }

  const context = {
    favorites: myFaves,
    totalFavorites: myFaves.length,
    addFavorite: addFavesHandler,
    removeFavorite: removeFavesHandler,
    itemIsFavorite: itemIsFaveHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
