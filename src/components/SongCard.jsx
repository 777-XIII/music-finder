import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function SongCard({ song }) {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === song.id);

  return (
    <div>
      <img src={song.album.cover} alt={song.title} />
      <h3>
        {song.title} - {song.artist.name}
      </h3>
      <button onClick={() => toggleFavorite(song)}>
        {isFavorite ? <span>♥</span> : <span>♡</span>}
      </button>
      <audio controls>
        <source src={song.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SongCard;
