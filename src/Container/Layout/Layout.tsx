import { Outlet } from "react-router-dom";
import { Blog } from "..";

function Layout() {
  return (
    <section className="content">
      <Blog.Header />
      <Outlet />
      <Blog.Pagination />
      <Blog.Footer />
    </section>
  );
}

export default Layout;
