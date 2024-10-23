import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogHome, Layout } from "./Container";
import Blogpost from "./Container/Layout/Blogpost";

function App() {
  return (
    <Suspense fallback="Loading">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BlogHome />} />
            <Route path="/post/:id" element={<Blogpost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
