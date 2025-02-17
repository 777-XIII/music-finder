import React, { useState, useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";
import { searchMusic } from "../api/musicApi";
import SongCard from "../components/SongCard";

function Search() {
  const { playlists } = useContext(PlaylistContext);
  const defaultPlaylistId = playlists.length > 0 ? playlists[0].id : null;
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMusic(query);
    setSongs(results);
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
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} playlistId={defaultPlaylistId} />
        ))}
      </div>
    </div>
  );
}

export default Search;
