import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localStorageFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(localStorageFavorites);
  }, []);

  const toggleFavorite = (slug) => {
    const updatedFavorites = favorites.includes(slug)
      ? favorites.filter((favorite) => favorite !== slug)
      : [...favorites, slug];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (slug) => favorites.includes(slug);

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
