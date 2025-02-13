import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../context/PlaylistContext";
import SongCard from "../components/SongCard";

function PlaylistDetail() {
  const { playlists, addSongToPlaylist } = useContext(PlaylistContext);
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === Number(id));

  if (!playlist) {
    return <h2>Playlist not found</h2>;
  }

  return (
    <div className="playlist-detail">
      <h2>{playlist.name}</h2>

      {playlist.songs.length === 0 ? (
        <p>No songs in this playlist.</p>
      ) : (
        playlist.songs.map((song) => <SongCard key={song.id} song={song} />)
      )}
    </div>
  );
}

export default PlaylistDetail;
