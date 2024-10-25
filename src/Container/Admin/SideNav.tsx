import { NavLink, useNavigate } from "react-router-dom";
import Branding from "../../assets/Images/icon2.png";

function SideNav() {
  const navigate = useNavigate();

  return (
    <aside className="dashboard__sidenav">
      <div className="dashboard__sidenav--branding">
        <img src={Branding} />
      </div>
      <div className="dashboard__sidenav--new-post">
        <button onClick={() => navigate("/a/blog/compose")}>
          <i className="fa-solid fa-plus" />
          <span>NEW POST</span>
        </button>
      </div>
      <div className="dashboard__sidenav__menu">
        <div className="dashboard__sidenav__menu--link">
          <NavLink to="/a/blog/posts">
            <i className="fa-solid fa-list" />
            <span>Posts</span>
          </NavLink>
        </div>
        <div className="dashboard__sidenav__menu--link">
          <NavLink to="/a/users">
            <i className="fa-solid fa-users" />
            <span>Users</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
