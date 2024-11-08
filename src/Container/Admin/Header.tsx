import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const [_, __, removeCookies] = useCookies();

  return (
    <header className='dashboard__header'>
      <div className='dashboard__header--actions'>
        <NavLink to='/' onClick={() => removeCookies("accessToken")}>
          Logout
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
