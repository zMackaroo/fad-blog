import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogHome, Layout, Login, BlogPost } from "./Container";
import { DefaultLoading, PageNotFound } from "./Components";

function App() {
  return (
    <Suspense fallback={<DefaultLoading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BlogHome />} />
            <Route path="/p/:id" element={<BlogPost />} />
            <Route path="/admin" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

function RenderAppResources() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setResourcesLoaded(true);
    }, 1500);
  }, []);

  return resourcesLoaded ? <App /> : <DefaultLoading />;
}
export default RenderAppResources;
