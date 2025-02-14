import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";

function MyPlaylist() {
  const { playlist, addPlaylist, deletePlaylist } = useContext(PlaylistContext);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() === "") return;
    addPlaylist(newPlaylistName);
    setNewPlaylistName("");
  };

  return (
    <div className="playlist-container">
      <h2>My Playlist</h2>

      <div className="playlist-form">
        <input
          type="text"
          placeholder="Enter playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
      </div>
      <div className="playlist-grid">
        {playlist && playlist.length === 0 ? (
          <p>No playlist created.</p>
        ) : (
          playlist &&
          playlist.map((playlist) => (
            <div key={playlist.id} className="playlist-card">
              <h3>{playlist.name}</h3>
              <div className="playlist-actions">
                <Link to={`/playlist/${playlist.id}`}>Open</Link>
                <button onClick={() => deletePlaylist(playlist.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyPlaylist;
