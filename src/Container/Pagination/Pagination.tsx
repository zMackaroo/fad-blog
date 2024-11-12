import React from "react";

function Pagination(props: { callBack: (page: Number) => void }) {
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    props.callBack(currentPage);
  }, [currentPage]);

  return (
    <div className='pagination'>
      <button
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      >
        Previous
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}

export default Pagination;
