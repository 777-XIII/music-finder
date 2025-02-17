import React, { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { PlaylistContext } from "../context/PlaylistContext";
import PlaylistSelectModal from "./PlaylistSelectModal";

function SongCard({ song }) {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const { playlists, addSongToPlaylist, removeSongFromPlaylist } =
    useContext(PlaylistContext);
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
      {playlists.some((playlist) =>
        playlist.songs.some((s) => s.id === song.id)
      ) ? (
        <button
          onClick={() => {
            const playlist = playlists.find((playlist) =>
              playlist.songs.some((s) => s.id === song.id)
            );
            removeSongFromPlaylist(playlist.id, song.id);
          }}
        >
          Remove from Playlist
        </button>
      ) : (
        <button onClick={() => setShowPlaylistModal(true)}>
          Add to Playlist
        </button>
      )}
      {showPlaylistModal && (
        <PlaylistSelectModal
          playlists={playlists}
          onSelect={(playlistId) => {
            addSongToPlaylist(playlistId, song);
            setShowPlaylistModal(false);
          }}
          onClose={() => setShowPlaylistModal(false)}
        />
      )}
      <audio controls>
        <source src={song.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SongCard;
