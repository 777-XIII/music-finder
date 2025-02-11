import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../api/musicApi';
import SongCard from '../components/SongCard';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getSongs = async () => {
  //     try {
  //       const data = await fetchSongs();
  //       console.log("Fetched songs data:", data); // Log the fetched data
  //       setSongs(data);
  //     } catch (error) {
  //       setError("Failed to fetch songs.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getSongs();
  // }, []);

  return (
    <div>
      <h2>Home</h2>
      {loading && <p>Loading songs...</p>}
      {error && <p>{error}</p>}
      <div className="song-list">
        {songs.length > 0 ? (
          songs.map(song => (
            <SongCard key={song.id} song={song} />
          ))
        ) : (
          <p>No songs available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
