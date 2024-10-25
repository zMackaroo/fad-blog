import { lazy } from "react";

export const Blog = {
  Header: lazy(() => import("./Header/Header")),
  Home: lazy(() => import("./Blog/Home")),
  Pagination: lazy(() => import("./Pagination/Pagination")),
  Footer: lazy(() => import("./Footer/Footer")),
  Layout: lazy(() => import("./Layout/Layout")),
  Post: lazy(() => import("./Layout/Blogpost")),
  Login: lazy(() => import("./Auth/Login")),
};

export const Admin = {
  Layout: lazy(() => import("./Layout/AdminLayout")),
  Header: lazy(() => import("./Admin/Header")),
  Sidebar: lazy(() => import("./Admin/SideNav")),
  Post: lazy(() => import("./Admin/Blogpost")),
  Compose: lazy(() => import("./Admin/Compose")),
  Users: lazy(() => import("./Admin/Users")),
};
