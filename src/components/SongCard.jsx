import React, { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { PlaylistContext } from "../context/PlaylistContext";

function SongCard({ song }) {
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const { playlists, addPlaylist, addSongToPlaylist } =
    useContext(PlaylistContext);

  const isFavorite = favorites.some((fav) => fav.id === song.id);
  const [showPopup, setShowPopup] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleAddToPlaylist = (playlistId) => {
    const playlist = playlists.find((p) => p.id === playlistId);
    const isSongInPlaylist = playlist.songs.some((s) => s.id === song.id);

    if (!isSongInPlaylist) {
      addSongToPlaylist(playlistId, song);
      setPopupMessage("Song added to playlist!");
    } else {
      setPopupMessage("This song is already in the playlist!");
    }

    setTimeout(() => {
      setShowPopup(false);
      setPopupMessage("");
    }, 3000);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() === "") return;
    addPlaylist(newPlaylistName);
    setNewPlaylistName("");
  };

  return (
    <div className="song-card">
      <img src={song.album.cover} alt={song.title} />
      <h3>
        {song.title} - {song.artist.name}
      </h3>

      <div className="song-actions">
        <button onClick={() => setShowPopup(true)}>Add to Playlist</button>
        <button onClick={() => toggleFavorite(song)}>
          {" "}
          {/* className="favorite-btn" */}
          {isFavorite ? <span>♥</span> : <span>♡</span>}
        </button>
      </div>

      <audio controls>
        <source src={song.preview} type="audio/mpeg" />
      </audio>

      {/* POP-UP */}
      {showPopup && (
        <div className="playlist-popup">
          <h4>Select a Playlist</h4>
          {popupMessage && <p className="popup-message">{popupMessage}</p>}
          <ul>
            {playlists.map((playlist) => (
              <li
                key={playlist.id}
                onClick={() => handleAddToPlaylist(playlist.id)}
              >
                {playlist.name}
              </li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="New playlist name"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
          <button onClick={handleCreatePlaylist}>+</button>

          <button className="close-popup" onClick={() => setShowPopup(false)}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default SongCard;
