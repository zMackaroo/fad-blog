interface PaginationProps {
  callBack: (page: number) => void;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

function Pagination(props: PaginationProps) {
  const { callBack, currentPage, totalPages, hasNextPage, hasPrevPage } = props;

  const handlePrevious = () => {
    if (hasPrevPage) {
      callBack(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      callBack(currentPage + 1);
    }
  };

  // Don't render pagination if there's only one page or no pages
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={!hasPrevPage}
        style={{
          opacity: hasPrevPage ? 1 : 0.5,
          cursor: hasPrevPage ? "pointer" : "not-allowed",
        }}
      >
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={!hasNextPage}
        style={{
          opacity: hasNextPage ? 1 : 0.5,
          cursor: hasNextPage ? "pointer" : "not-allowed",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
