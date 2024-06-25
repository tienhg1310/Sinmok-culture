import { useState } from "react";

const usePanigation = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(4);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalItem, setTotalItem] = useState<number>(0);

  const handleChangePerPage = (perPage: number) => {
    setPerPage(perPage);
    setPage(1);
  
  }


  return {
    page,
    setPage,
    perPage,
    setPerPage,
    totalPage,
    setTotalPage,
    totalItem,
    setTotalItem,
    handleChangePerPage
  };
};

export { usePanigation };
