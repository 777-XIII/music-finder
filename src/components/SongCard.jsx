import "../styles/Global.css";

function SongCard({ song }) {
  return (
    <div className="song-card">
      <img src={song.album.cover} alt={song.title} />
      <h3>
        {song.title} - {song.artist.name}
      </h3>
      <audio controls>
        <source src={song.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SongCard;
