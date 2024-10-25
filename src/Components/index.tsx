import { lazy } from "react";

export const Loading = {
  Default: lazy(() => import("./Common/DefaultLoading")),
};

export const Catch = {
  PageNotFound: lazy(() => import("./Common/PageNotFound")),
};
