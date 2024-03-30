import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, page, setPage }) {
  if (pageCount > 500) {
    pageCount = 500;
  }
  const handlePageClick = (data) => {
    setPage(data.selected + 1); // نضيف واحد لأن الترقيم يبدأ من الصفحة 0
  };

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      previousLinkClassName="pagination__link"
      nextLinkClassName="pagination__link"
      disabledClassName="pagination__link--disabled"
      activeClassName="pagination__link--active"
      forcePage={page - 1}
    />
  );
}

export default Pagination;
