import { Outlet } from "react-router-dom";
import { Header, Footer, Pagination } from "..";

function Layout() {
  return (
    <section className="content">
      <Header />
      <Outlet />
      <Pagination />
      <Footer />
    </section>
  );
}

export default Layout;
