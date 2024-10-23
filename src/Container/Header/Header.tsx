import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Images/icon2.png";

function Header() {
  const location = useLocation();

  return (
    <section className="header">
      <div className="header__branding">
        <NavLink to="/">
          <div className="header__branding--logo">
            <img src={Logo} />
          </div>
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
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
