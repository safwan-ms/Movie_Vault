import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-black navbar ">
      <div className="flex-1">
        <Link to="/" className="text-xl btn btn-ghost text-warning">
          Movie App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/" className="text-warning">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="text-warning">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
