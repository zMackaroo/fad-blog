import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <section className="header">
      <div className="header__branding">
        <NavLink to="/">
          <h3>{import.meta.env.VITE_COMPANY}</h3>
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Newsletter</NavLink>
        </nav>
      </div>
      {location.pathname === "/" && (
        <div className="header__headline">
          <span className="header__headline--headline">
            {import.meta.env.VITE_HEADLINE}
          </span>
        </div>
      )}
    </section>
  );
}

export default Header;
