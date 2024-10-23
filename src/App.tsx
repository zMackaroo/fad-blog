import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogHome, Layout } from "./Container";
import { DefaultLoading } from "./Components";
import Blogpost from "./Container/Layout/Blogpost";

function App() {
  return (
    <Suspense fallback={<DefaultLoading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BlogHome />} />
            <Route path="/:id" element={<Blogpost />} />
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
    }, 3000);
  }, []);

  return resourcesLoaded ? <App /> : <DefaultLoading />;
}
export default RenderAppResources;
