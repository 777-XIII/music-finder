import Playlists from "./MyPlaylist";
import Favorites from "./Favorites";
import Search from "./Search";


function Home() {
  return (
    <div>
      {/* Oberer Bereich mit Willkommensnachricht */}
      <div className="container">
        <h1 className="neon-text">Welcome to MusicFinder</h1>
        <p>Search for your favorite songs and add them to your playlist</p>
        <p>Click on 'Search' to get started</p>
      </div>

      {/* Unterer Bereich mit den drei Containern */}
      <div className="home-container">
        {/* Container für Playlists */}
        <div className="home-box">
          <h2>My Playlists</h2>
          <Playlists />
        </div>

        {/* Container für Favorites */}
        <div className="home-box">
          <h2>Favorites</h2>
          <Favorites />
        </div>

        {/* Container für Search */}
        <div className="home-box">
          <h2>Search</h2>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
