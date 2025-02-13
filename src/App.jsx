import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import MyPlaylist from "./pages/MyPlaylist";
import PlaylistDetail from "./pages/PlaylistDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {
  return (
    <FavoritesProvider>
      <PlaylistProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlists" element={<MyPlaylist />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
        </Routes>
      </PlaylistProvider>
    </FavoritesProvider>
  );
}

export default App;
