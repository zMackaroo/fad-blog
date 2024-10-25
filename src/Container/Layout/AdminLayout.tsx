import { Outlet } from "react-router-dom";
import { Admin } from "..";

function AdminLayout() {
  return (
    <>
      <Admin.Header />
      <Admin.Sidebar />
      <main className="dashboard__main">
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
