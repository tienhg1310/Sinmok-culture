import { useEffect, useState } from "react";
import lectureService from "../API/Lecture.service";
import { usePanigation } from "./usePanigation";
import type { ILecture } from "../../Constants/interface";
import fakeDB from "../../db.json"

const useGetLectureList = (getAll: boolean) => {
  const [lectureList, setLectureList] = useState<ILecture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { page, setPage, perPage,setPerPage, totalPage, setTotalPage, totalItem, setTotalItem, handleChangePerPage } =
    usePanigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const params: any = {};
        // if (page) {
        //   params["_page"] = page;
        // }
        // if (perPage && getAll) {
        //   params["_perPage"] = perPage;
        // }
        // const headers = {};
        // const response = await lectureService.getLectures(params, headers);
        // setdata
        // if (response.data) {
        //   setLectureList(response.data.data);
        //   setTotalPage(response.data.pages);
        //   setTotalItem(response.data.items);
        // }
        const response = fakeDB.Lectures;
        setLectureList(response);
        setTotalPage(1);
        setTotalItem(response.length);
        // setPerPage(response.length);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, perPage, setTotalPage, setTotalItem, getAll]);
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
