export interface ILecture {
  id: string;
  title: string;
  registration_status: string;
  category: string;
  semester: string;
  fee: string;
  date_range: string;
  time: string;
  details: string;
  image_url: string;
  reviews: Array<any>;
  teacher: string;
}
