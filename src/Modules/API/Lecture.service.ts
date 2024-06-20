import ApiServices from "./Api.service";

class LectureService {
  public async getLectures(params: any, headers: any) {
    const response = await ApiServices("Lectures", { params, headers });
    return response;
  }
}

const lectureService = new LectureService();


export default lectureService;
