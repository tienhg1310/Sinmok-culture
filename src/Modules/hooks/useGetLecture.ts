import { useState } from "react";
import type { ILecture } from "../../Constants/interface";
import lectureService from "../API/Lecture.service";

const useGetLecture = () => {
  const [lecture, setLecture] = useState<ILecture | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async (id: string) => {
    try {
      const response = await lectureService.getLecture(id);
      setLecture(response);
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
