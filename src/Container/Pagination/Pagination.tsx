import { useLocation } from "react-router-dom";

function Pagination() {
  const location = useLocation();

  return (
    location.pathname === "/" && (
      <div className="pagination">
        <button>Previous</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Next</button>
      </div>
    )
  );
}

export default Pagination;
