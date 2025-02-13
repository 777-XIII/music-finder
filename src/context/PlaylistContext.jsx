import React, { createContext, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem("playlists")) || []
  );

  function addPlaylist(name) {
    const newPlaylist = { id: Date.now(), name, songs: [] };
    const updatedPlaylists = [...playlists, newPlaylist];

    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  }

  function deletePlaylist(id) {
    const updatedPlaylists = playlists.filter((p) => p.id !== id);
    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  }

  function addSongToPlaylist(playlistId, song) {
    const updatedPlaylists = playlists.map((p) =>
      p.id === playlistId ? { ...p, songs: [...p.songs, song] } : p
    );
    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  }

  return (
    <PlaylistContext.Provider
      value={{ playlists, addPlaylist, deletePlaylist, addSongToPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
