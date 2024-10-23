import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogHome, Layout } from "./Container";
import { DefaultLoading, PageNotFound } from "./Components";
import Blogpost from "./Container/Layout/Blogpost";

function App() {
  return (
    <Suspense fallback={<DefaultLoading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BlogHome />} />
            <Route path="/:id" element={<Blogpost />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/auth" element={<h1>Admin Login</h1>} />
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
