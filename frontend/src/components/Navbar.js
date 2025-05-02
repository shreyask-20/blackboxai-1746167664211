import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1 transition duration-300'
    : 'hover:text-yellow-300 transition duration-300';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-30 glass backdrop-blur-xs p-4 flex justify-between items-center max-w-7xl mx-auto rounded-lg mb-6">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        GameTourny
      </Link>
      <ul className="flex space-x-6 text-lg">
        <li>
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={navLinkClass}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className={navLinkClass}>
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={navLinkClass}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
