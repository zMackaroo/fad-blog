import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Blog, Admin } from "./Container";
import { Loading, Catch } from "./Components";
import { ContextProvider } from "./Utils/Context/Context";

function App() {
  return (
    <Suspense fallback={<Loading.Default />}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Blog.Layout />}>
              <Route path='/' element={<Blog.Home />} />
              <Route path='/p/:id' element={<Blog.Post />} />
              <Route path='/admin' element={<Blog.Login />} />
              <Route path='*' element={<Catch.PageNotFound />} />
            </Route>
            <Route path='/a/' element={<Admin.Layout />}>
              <Route path='/a/blog/compose/:id' element={<Admin.Compose />} />
              <Route path='/a/blog/posts' element={<Admin.Post />} />
              <Route path='/a/users' element={<Admin.Users />} />
              <Route path='*' element={<Catch.PageNotFound />} />
            </Route>
            <Route path='*' element={<Catch.PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
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

  return resourcesLoaded ? <App /> : <Loading.Default />;
}
export default RenderAppResources;
