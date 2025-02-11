/* import React from 'react';
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
 */

// import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

/* const Nav = styled.nav`
  background: #333;
  padding: 10px;
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
 */
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
