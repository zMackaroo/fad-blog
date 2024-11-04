import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="dashboard__header">
      <div className="dashboard__header--actions">
        <NavLink to="/">Logout</NavLink>
      </div>
    </header>
  );
}

export default Header;
