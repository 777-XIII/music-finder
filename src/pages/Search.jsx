import React, { useState } from "react";
import { searchMusic } from "../api/musicApi";
import SongCard from "../components/SongCard";

function Search() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMusic(query);
    setSongs(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter song or artist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Search;
