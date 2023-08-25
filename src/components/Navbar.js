import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
