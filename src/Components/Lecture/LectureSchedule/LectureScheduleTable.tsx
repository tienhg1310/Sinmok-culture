import { FC } from "react";
import "./LectureScheduleTable.scss";

type Props = {};

const LectureSchedule: FC<Props> = (props) => {
  const data = [
    {
      day: "월",
      courses: [
        {
          name: "미도리네코 선생님의 일본어 기초반",
          time: "10:00~11:00",
          sessions: 12,
          price: 90000,
        },
        {
          name: "미도리네코 선생님의 일본어 초급반",
          time: "11:10-12:10",
          sessions: 12,
          price: 90000,
        },
        {
          name: "미도리네코 선생님의 일본어 초중급반",
          time: "12:20-13:20",
          sessions: 12,
          price: 90000,
        },
        {
          name: "ABC",
          time: "10:30~11:30",
          sessions: 12,
          price: 50000,
        },
      ],
    },
    {
      day: "+8주",
      courses: [
        {
          name: "ABC",
          time: "10:00~12:00",
          sessions: 8,
          price: 33400,
        },
        {
          name: "미도리네코 선생님의 일본어 기초반",
          time: "10:00~11:00",
          sessions: 8,
          price: 60000,
        },
        {
          name: "미도리네코 선생님의 일본어 초급반",
          time: "11:10-12:10",
          sessions: 8,
          price: 60000,
        },
        {
          name: "미도리네코 선생님의 일본어 초중급반",
          time: "12:20-13:20",
          sessions: 8,
          price: 60000,
        },
      ],
    },
  ];
  return (
    <div className="categories-table">
      <table>
        <thead>
          <tr>
            <th>요일</th>
            <th>강좌명</th>
            <th>시간</th>
            <th>횟수</th>
            <th>수강료</th>
          </tr>
        </thead>
        <tbody>
          {data.map((day) => (
            <>
              {day.courses.map((course, index) => (
                <tr>
                  {index === 0 && (
                    <td className="day" rowSpan={day.courses.length}>
                      {day.day}
                    </td>
                  )}
                  <td>{course.name}</td>
                  <td>{course.time}</td>
                  <td>{course.sessions}</td>
                  <td>{course.price.toLocaleString()}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LectureSchedule;
