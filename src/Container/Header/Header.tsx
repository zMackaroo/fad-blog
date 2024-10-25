import { useCookies } from "react-cookie";
import { useLocation, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/icon2.png";

function Header() {
  const [cookies] = useCookies();
  const location = useLocation();
  const isLoggedIn = cookies.accessToken;

  return (
    <header className="header">
      <div className="header__branding">
        <NavLink to="/">
          <div className="header__branding--logo">
            <img src={Logo} />
          </div>
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/a/blog/posts">Dashboard</NavLink>}
        </nav>
      </div>
      {location.pathname === "/" && (
        <div className="header__headline">
          <span className="header__headline--headline">
            {import.meta.env.VITE_HEADLINE}
          </span>
        </div>
      )}
    </header>
  );
}

export default Header;
