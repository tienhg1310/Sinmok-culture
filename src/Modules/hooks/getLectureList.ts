import { useEffect, useState } from "react";
import lectureService from "../API/Lecture.service";
import { usePanigation } from "./usePanigation";

const useGetLectureList = () => {
  const [lectureList, setLectureList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    page,
    setPage,
    perPage,
    setPerPage,
    totalPage,
    setTotalPage,
    totalItem,
    setTotalItem,
  } = usePanigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = {
          _page: page,
          _per_page: perPage,
        };
        const headers = {};
        const response = await lectureService.getLectures(params, headers);
        // setdata
        if (response.data) {
          setLectureList(response.data.data);
          setTotalPage(response.data.pages);
          setTotalItem(response.data.items);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, perPage, setTotalPage, setTotalItem]);
  return {
    lectureList,
    loading,
    page,
    setPage,
    perPage,
    setPerPage,
    totalPage,
    totalItem,
  };
};

export { useGetLectureList };
