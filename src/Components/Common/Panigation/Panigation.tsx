import { useState, type FC } from "react";
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
  const handleClick = (page: any) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="pagination">
      <div className="panigation__number">
        <button
          className="pagination__button"
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
              className={`pagination__number ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="pagination__button"
          disabled={currentPage === totalPage}
          onClick={() => handleClick(currentPage + 1)}
        >
          {">"}
        </button>
        <button
          className="pagination__button"
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
            {[5, 10, 15, 20].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="panigation__total-item">
          {currentPage} - {currentPage + perPage - 1} of {totalItem} items
        </div>
      </div>
    </div>
  );
};

export default Panigation;
