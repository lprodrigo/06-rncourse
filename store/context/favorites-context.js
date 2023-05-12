import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = { ids: favoriteMealIds, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
