import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      {/* CD-Icon ganz links */}
      <Link to="/">
        <FontAwesomeIcon icon={faCompactDisc} className="navbar-icon" />
      </Link>

      {/* Links in der Navbar */}
      <Link to="/"> Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/playlists">My Playlists</Link>
    </nav>
  );
}

export default Navbar;
