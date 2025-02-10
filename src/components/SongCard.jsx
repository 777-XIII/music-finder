import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <img src={song.album.cover} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist.name}</p>
    </div>
  );
};

export default SongCard;
