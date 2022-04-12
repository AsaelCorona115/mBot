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
      <div className="courseDescriptor container">
        <div className="row mt-5">
          <div className="col-md-12 col-lg-6 text-lg-start text-md-center mt-5">
            <h1 className="descriptionTitle text-dark d-block">
              About this course:
            </h1>
            <p className="fs-4 text-dark d-block">{props.description}</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src={props.courseImage}
              alt="NavbarBackground"
              className="img-fluid border border-dark border-5 rounded"
            />
          </div>
        </div>
      </div>

      <div className="lessonList container mt-5">
        <h1 className="courseDescriptor bg-white text-primary d-inline border border-primary rounded p-3 align-middle">
          Lesson List
        </h1>
        <div className="row mt-5 border border-primary">
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
