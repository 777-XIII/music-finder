import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";

function MyPlaylist() {
  const { playlists, addPlaylist, deletePlaylist } =
    useContext(PlaylistContext);
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
        {playlists && playlists.length === 0 ? (
          <p>No playlist created.</p>
        ) : (
          playlists &&
          playlists.map((playlists) => (
            <div key={playlists.id} className="playlist-card">
              <h3>{playlists.name}</h3>
              <div className="playlist-actions">
                <Link to={`/playlist/${playlists.id}`}>
                  <button onClick={() => navigate(`/playlist/${playlists.id}`)}>
                    {" "}
                    Open{" "}
                  </button>
                </Link>

                <button onClick={() => deletePlaylist(playlists.id)}>
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
