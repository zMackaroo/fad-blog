import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Admin } from "..";

function AdminLayout() {
  const navigate = useNavigate();
  const [cookies] = useCookies();

  useLayoutEffect(() => {
    if (cookies.accessToken === undefined) navigate("/admin");
  }, []);

  return (
    <>
      <Admin.Header />
      <Admin.Sidebar />
      <main className='dashboard__main'>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
