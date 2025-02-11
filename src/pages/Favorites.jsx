import React from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import { SongCard } from "../components/SongCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <h2>Deine Favoriten</h2>
      {favorites.length === 0 ? (<p>Keine Favoriten gespeichert.</p>) 
      : (favorites.map((song) => <SongCard key ={song.id} song={song} />)
      )}
    </div>
  );

}

export default Favorites;
