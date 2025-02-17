import React from "react";

function PlaylistSelectModal({ playlists, onSelect, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Select a Playlist</h3>
        <ul className="playlist-list">
          {playlists.map((playlist) => (
            <li key={playlist.id} onClick={() => onSelect(playlist.id)}>
              {playlist.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PlaylistSelectModal;
