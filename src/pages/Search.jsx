import React, { useState, useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";
import { searchMusic } from "../api/musicApi";
import SongCard from "../components/SongCard";

function Search() {
  const { playlists } = useContext(PlaylistContext);
  const defaultPlaylistId = playlists.length > 0 ? playlists[0].id : null;
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const results = await searchMusic(query);
      setSongs(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter song or artist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : (
          songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlistId={defaultPlaylistId}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
