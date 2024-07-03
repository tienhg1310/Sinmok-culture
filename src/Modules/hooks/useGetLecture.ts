import { useState } from "react";
import type { ILecture } from "../../Constants/interface";
import dbFake from "../../db.json";

const useGetLecture = () => {
  const [lecture, setLecture] = useState<ILecture | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async (id: string) => {
    try {
      // const response = await lectureService.getLecture(id);
      const lectures = dbFake.Lectures;
      const response = lectures.find((lecture: ILecture) => lecture.id === id);
      if (response) {
        setLecture(response);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    lecture,
    loading,
    error,
    fetchData,
  };
};

export { useGetLecture };

