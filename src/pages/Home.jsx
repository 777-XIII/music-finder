import Playlists from "./MyPlaylist";
import Favorites from "./Favorites";
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
        <div className="home-box1">
          <Playlists />
        </div>
        {/* Container für Favorites */}
        <div className="home-box2">
          <Favorites />
        </div>
        {/* Container für Search */}
        {/* <div className="home-box3">
          <Search />
        </div> */}
      </div>
    </div>
  );
}
export default Home;
