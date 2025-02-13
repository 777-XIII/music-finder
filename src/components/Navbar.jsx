import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/playlists">My Playlists</Link>
    </nav>
  );
}

export default Navbar;
