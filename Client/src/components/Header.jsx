import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"> Home </Link>
      <ul>
        <li>
          <Link to="login">Item</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
