import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualLesson = (props) => {
  const [lessonInformation, setLessonInformation] = useState(null);
  const { key } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/${props.courseName}Lessons?key=${key}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setLessonInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="individualLesson">
      {lessonInformation && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1>
                Lesson Number {lessonInformation[0].lessonNumber} :{" "}
                {lessonInformation[0].lessonTitle}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualLesson;
