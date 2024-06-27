import { useEffect, useState } from "react";
import { ILecture } from "../../Constants/interface";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useGetLecturePayment = (lectureId: string) => {
  const [lecturePaymentInfo, setLecturePaymentInfo] = useState<ILecture>();
  const { cart, status } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (status === "succeeded" && cart.length > 0) {
      const lecture = cart.find((item: ILecture) => item.id === lectureId);
      if (lecture) {
        setLecturePaymentInfo(lecture);
      }
      return;
    }
  }, [cart, lectureId, status]);

  return {lecturePaymentInfo}
}