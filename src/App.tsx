import { Suspense } from "react";
import { BlogHome, Footer, Header, Pagination } from "./Container";

function App() {
  return (
    <Suspense fallback="Loading">
      <section className="content">
        <Header />
        <BlogHome />
        <Pagination />
        <Footer />
      </section>
    </Suspense>
  );
}

export default App;
