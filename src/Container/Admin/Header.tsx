import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="dashboard__header">
      <NavLink to="/">Logout</NavLink>
    </header>
  );
}

export default Header;
