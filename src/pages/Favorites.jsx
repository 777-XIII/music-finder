import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import SongCard from "../components/SongCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <h2>Your favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites saved.</p>
      ) : (
        favorites.map((song) => <SongCard key={song.id} song={song} />)
      )}
    </div>
  );
}

export default Favorites;
