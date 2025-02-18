import React, { createContext, useState, useEffect } from "react";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem("playlists")) || []
  );

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  function addPlaylist(name) {
    const newPlaylist = { id: Date.now(), name, songs: [] };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  }

  function deletePlaylist(id) {
    setPlaylists((prevPlaylists) => prevPlaylists.filter((p) => p.id !== id));
  }

  function addSongToPlaylist(playlistId, song) {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((p) =>
        p.id === playlistId ? { ...p, songs: [...p.songs, song] } : p
      )
    );
  }

  function removeSongFromPlaylist(playlistId, songId) {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((p) =>
        p.id === playlistId
          ? { ...p, songs: p.songs.filter((song) => song.id !== songId) }
          : p
      )
    );
  }

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        addPlaylist,
        deletePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

/* import React, { createContext, useState } from "react";

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

  function removeSongFromPlaylist(playlistId, songId) {
    const updatedPlaylists = playlists.map((p) =>
      p.id === playlistId
        ? { ...p, songs: p.songs.filter((s) => s.id !== songId) }
        : p
    );
    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  }

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        addPlaylist,
        deletePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
 */
