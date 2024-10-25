import { lazy } from "react";

export const Menu = {
  TopBar: lazy(() => import("./TopBar")),
  Bubble: lazy(() => import("./Bubble")),
  Floating: lazy(() => import("./Floating")),
};
