import Navbar from "../components/Navbar";
import CourseSelector from "./courseSelector";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CourseMainPage = (props) => {
  const [lessonList, setLessonList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/${props.courseName}Lessons`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setLessonList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.courseName]);

  return (
    <div className="courseMainPage">
      <img
        src={props.courseImage}
        alt="NavbarBackground"
        className="mainPageBackground"
      />

      <div className="courseDescriptor container">
        <div className="row">
          <div className="col-6 text-start">
            <h1 className="descriptionTitle">About this course: </h1>
            <p className="fs-4">{props.description}</p>
          </div>
        </div>
      </div>

      <div className="lessonList container">
        <h1 className="courseDescriptor">Lesson List</h1>
        <div className="row">
          <div className="col-12">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {lessonList &&
                lessonList.map((lesson) => {
                  return (
                    <div className="accordion-item" key={lesson.key}>
                      <h2
                        className="accordion-header"
                        id={`flush-heading${lesson.key}`}
                      >
                        <button
                          className="accordion-button collapsed fs-4 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${lesson.key}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${lesson.key}`}
                        >
                          Lesson Number {lesson.lessonNumber}:{" "}
                          {lesson.lessonTitle}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${lesson.key}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${lesson.key}`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body fs-4">
                          {lesson.lessonDescription}
                          <br />
                          <br />
                          <Link
                            className="anyLink"
                            to={`/${lesson.course}Lessons/${lesson.key}`}
                          >
                            <button
                              type="button"
                              className="btn btn-outline-primary courseButton"
                            >
                              Go to lesson.
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CourseMainPage;
