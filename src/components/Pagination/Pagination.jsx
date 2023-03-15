import React, { useEffect, useState } from "react";

const Pagination = ({
  data,
  sortConfig,
  currentData,
  setCurrentData,
  setShowingText,
  perPage = 8,
}) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(perPage);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    setcurrentPage(1);
    setmaxPageNumberLimit(5);
    setminPageNumberLimit(0);
  }, [sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Set Showing Text
  useEffect(() => {
    if (!currentPage || !currentData) return;
    const currentPageCount = Number(currentPage) - 1;
    const startIndex =
      currentPageCount === 0 ? 1 : currentPageCount * itemsPerPage + 1;
    const end = currentData?.length * currentPage;
    const totalIndex = data.length;
    const endIndex =
      currentData?.length < perPage || end > totalIndex ? totalIndex : end;

    setShowingText(
      <>
        Showing <span>{startIndex}</span> - <span>{endIndex}</span> from{" "}
        <span>{totalIndex}</span> products
      </>
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentData, currentPage, sortConfig]);

  useEffect(() => {
    setCurrentData(data.slice(indexOfFirstItem, indexOfLastItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortConfig, setCurrentData, indexOfFirstItem, indexOfLastItem]);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    if (currentPage === pages[pages.length - 1]) return;
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    if (currentPage === pages[0]) return;
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleFastNext = () => {
    if (currentPage + pageNumberLimit > pages.length) return handleNextbtn();
    if (!(pages.length > maxPageNumberLimit)) return;
    setcurrentPage(currentPage + pageNumberLimit);
    if (currentPage + pageNumberLimit > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleFastBack = () => {
    if (!(minPageNumberLimit >= pageNumberLimit)) return handlePrevbtn();
    setcurrentPage(currentPage - pageNumberLimit);
    if ((currentPage - pageNumberLimit) % pageNumberLimit >= 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>
      {data.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Previous
          </button>

          <button onClick={handleFastBack}>&hellip;</button>
          {renderPageNumbers}
          <button onClick={handleFastNext}>&hellip;</button>

          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
