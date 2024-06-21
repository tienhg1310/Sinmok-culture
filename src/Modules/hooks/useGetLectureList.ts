import { useEffect, useState } from "react";
import lectureService from "../API/Lecture.service";
import { usePanigation } from "./usePanigation";
import type { ILecture } from "../../Constants/interface";

const useGetLectureList = () => {
  const [lectureList, setLectureList] = useState<ILecture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    page,
    setPage,
    perPage,
    totalPage,
    setTotalPage,
    totalItem,
    setTotalItem,
    handleChangePerPage,
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
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, perPage]);
  return {
    lectureList,
    loading,
    error,
    page,
    setPage,
    perPage,
    totalPage,
    totalItem,
    handleChangePerPage,
  };
};

export { useGetLectureList };
