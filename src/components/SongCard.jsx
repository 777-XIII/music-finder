import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { PlaylistContext } from "../context/PlaylistContext";

function SongCard({ song }) {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const { addSongToPlaylist } = useContext(PlaylistContext);
  const isFavorite = favorites.some((fav) => fav.id === song.id);

  return (
    <div className="song-card">
      <img src={song.album.cover} alt={song.title} />
      <h3>
        {song.title} - {song.artist.name}
      </h3>
      <button className="favorite-btn" onClick={() => toggleFavorite(song)}>
        {isFavorite ? <span>♥</span> : <span>♡</span>}
      </button>
      <button onClick={() => addSongToPlaylist(1, song)}>
        Add to Playlist
      </button>
      <audio controls>
        <source src={song.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SongCard;
