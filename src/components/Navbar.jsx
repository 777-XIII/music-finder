import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." />
      <button type="button" onClick={() => console.log("Search clicked")}>Search</button>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/charts">Charts</Link>
      </div>
    </div>
  );
};

export default Navbar;
