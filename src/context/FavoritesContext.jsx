import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (song) => {
    setFavorites((prevFavorites) => [...prevFavorites, song]);
  };

  const removeFavorite = (songId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(song => song.id !== songId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
