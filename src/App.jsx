import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState([]); // State for song data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetch("https://api.codetabs.com/v1/proxy/?quest=https://api.deezer.com/user/2529")
      .then((response) => response.json())
      .then((data) => { 
        setLoading(false); // Set loading to false after data is fetched
        console.log(data); // Log the data to check the response
        console.log("Fetched data:", data); // Inspect the structure of the fetched data
        console.log(data); // Inspect the structure of the fetched data
        setSongs(data.data); // Assuming data.data contains the songs
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch songs. Please try again."); // Set error message
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading songs...</p> // Display loading message
        ) : error ? (
          <p>{error}</p> // Display error message
        ) : (
          songs.map((song) => (
            <div key={song.id}>
              <img src={song.album.cover} alt={song.title} />{" "}
              {/* Display album cover */}
              <p>{song.title}</p>
            </div>
          ))
        )}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* Removed the reactLogo import and its usage */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
