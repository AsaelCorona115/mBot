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
  }, []);

  return (
    <div className="courseMainPage">
      <div className="container-fluid mBotCourseBanner">
        <div
          className="row d-flex align-items-center"
          style={{ height: "200px" }}
        >
          <div className="col-4">
            <h1 style={{ fontSize: "5rem", fontFamily: "Luminari, fantasy" }}>
              mBot
            </h1>
          </div>
        </div>
      </div>

      <div className="courseDescriptor container">
        <div className="row">
          <div className="col-8">
            <h1 className="descriptionTitle">Description:</h1>
            <p className="mBotCourseDescription" style={{ fontSize: "1.5rem" }}>
              This course is intended for beginners! Have you ever used an IDE?
              Do you know what a loop is? No? Well then this course is for you.
              Intended for people who have never coded before, here you will
              learn about basic programming concepts that can be applied to any
              coding language using the mBot! An affordable and educational
              robot that can be programmed using Scratch. Take you first steps
              to becoming a programmer!
            </p>
          </div>

          <div className="col-4">
            <img
              src="https://www.lifewire.com/thmb/4w7aNRiK7sYO7jfMO2jTNhcTeK8=/1500x1500/filters:no_upscale()/_hero_SQ_3LW4149488-1-4313fb506d5641ba9f814f50f9047e9c.jpg"
              alt="mBot thumbnail"
              className="img-fluid p-5"
            />
          </div>
        </div>
      </div>

      <div className="lessonList container">
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
                          className="accordion-button collapsed"
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
                        <div className="accordion-body">
                          {lesson.lessonDescription}
                          <br />
                          <br />
                          <Link
                            className="anyLink"
                            to={`/${lesson.course}lessons/${lesson.key}`}
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
    </div>
  );
};

export default CourseMainPage;
