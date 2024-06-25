import { useCallback, type FC } from "react";
import "./Panigation.scss";
import pages from "../../../Routers/pages";

type Props = {
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  setPerPage: (perPage: number) => void;
  totalPage: number;
  totalItem: number;
};

const Panigation: FC<Props> = ({
  totalPage,
  page: currentPage,
  setPage: setCurrentPage,
  perPage,
  setPerPage,
  totalItem,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const renderPages = useCallback(() => {
    const pages = [];
    if (currentPage > 3) {
      pages.push(
        <span key="start-dots" className="dots">
          ...
        </span>
      );
    }

    // Show the two pages before the current page
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i >= 1 && i <= totalPage) {
        pages.push(
          <button
            key={i}
            className={`pagination__number ${currentPage === i ? "active" : ""
              }`}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }
    }

    // Show dots if currentPage < totalPage - 2
    if (currentPage < totalPage - 2) {
      pages.push(
        <span key="end-dots" className="dots">
          ...
        </span>
      );
    }
    return pages;
  }, [currentPage, totalPage, perPage]);

  return (
    <div className="pagination">
      <div className="panigation__number">
        <button
          className="pagination__button next"
          disabled={currentPage === 1}
          onClick={() => handleClick(1)}
        >
          {"<<"}
        </button>
        <button
          className="pagination__button next"
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          {"<"}
        </button>
        {[...Array(totalPage)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`pagination__number ${currentPage === page ? "active" : ""
                }`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="pagination__button next"
          disabled={currentPage === totalPage}
          onClick={() => handleClick(currentPage + 1)}
        >
          {">"}
        </button>
        <button
          className="pagination__button next"
          disabled={currentPage === totalPage}
          onClick={() => handleClick(totalPage)}
        >
          {">>"}
        </button>
      </div>
      <div className="panigation__info">
        <div className="panigation__per-page">
          Items per page:{" "}
          <select
            name=""
            id=""
            value={perPage}
            defaultValue={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
          >
            {[4, 8, 16, 32].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="panigation__total-item">
          {(currentPage - 1) * perPage + 1} -{" "}
          {Math.min(currentPage * perPage, totalItem)} of {totalItem} items
        </div>
      </div>
    </div>
  );
};

export default Panigation;
