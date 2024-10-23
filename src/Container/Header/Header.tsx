import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__branding">
        <h3>FAD</h3>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Test</NavLink>
          <NavLink to="/">Newsletter</NavLink>
        </nav>
      </div>
      <div className="header__headline">
        <span className="header__headline--headline">URBAN VOGUE</span>
      </div>
    </section>
  );
}

export default Header;
