import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualLesson = (props) => {
  const [lessonInformation, setLessonInformation] = useState(null);
  const { key } = useParams();
  let counter = 1;

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/AsaelCorona115/CSC400Data/${props.courseName}Lessons?key=${key}`
    )
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
  let objKey = -1;

  return (
    <div className="individualLesson">
      {lessonInformation && (
        <div className="container-fluid mt-5 lessonContainer">
          <div className="row">
            {/* Lesson Header */}
            <div className="col-12 lessonHeader">
              <h1 className="display-1 fw-bolder">
                Lesson Number {lessonInformation[0].lessonNumber} :{" "}
                {lessonInformation[0].lessonTitle}
              </h1>
            </div>
          </div>

          {lessonInformation[0].lessonPresentation && (
            <div className="row mt-5">
              <div className="col-lg-2 col-md-12 display-5 mt-5">
                Presentation:{" "}
              </div>
              <div className="col-lg-10 col-md-12 text-start mt-5">
                <p className="fs-3 mt-5">
                  {lessonInformation[0].lessonPresentation}
                </p>
              </div>
            </div>
          )}

          {lessonInformation[0].lessonRequirements.length != 0 && (
            <div className="row mt-5">
              <div className="col-md-12 col-lg-2 display-5 mt-5">
                Requirements:{" "}
              </div>
              <div className="col-md-12 col-lg-10 text-center my-5">
                {lessonInformation[0].lessonRequirements.map((item) => {
                  objKey++;
                  return (
                    <img
                      key={objKey}
                      src={require(`../../public/mBotComponents/${item}.png`)}
                      className="img-thumbnail img-fluid rounded-circle border-dark"
                      alt={item}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {lessonInformation[0].lessonObjectives && (
            <div className="row mt-5">
              <div className="col-md-12 col-lg-2 display-5 mt-5 ">
                Objetives:{" "}
              </div>
              <div className="col-md-12 col-lg-10 mt-5">
                <ol className="mainText mt-5">
                  {lessonInformation[0].lessonObjectives.map((objective) => {
                    objKey++;
                    return (
                      <li className="fs-3" key={objKey}>
                        {objective}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          )}

          {lessonInformation[0].lessonAnalysis && (
            <div className="row mt-5">
              <div className="col-md-12 col-lg-2 display-5 mt-5 ">
                Analysis:{" "}
              </div>
              <div className="col-md-12 col-lg-10 text-start mt-5">
                <p className="fs-3 mt-5">
                  {lessonInformation[0].lessonAnalysis}
                </p>
              </div>
            </div>
          )}

          {lessonInformation[0].lessonDesign && (
            <div className="row">
              <div className="col-md-12 col-lg-2 display-5 mt-5">Design: </div>
              <div className="col-md-12 col-lg-10 mt-5">
                <p className="fs-4 mt-5">
                  Before we dive any further into the program, plan ahead! (zoom
                  in for better detail)
                </p>
                <img
                  className="img-fluid"
                  src={require(`../../public/lessonFlowCharts/${lessonInformation[0].lessonDesign}`)}
                  alt=""
                />
                <p className="fs-4">
                  We will check this diagram in the code along, however try to
                  understand without the video first.
                </p>
              </div>
            </div>
          )}

          {lessonInformation[0].codeAlong && (
            <div className="row mt-5">
              <div className="col-md-12 col-lg-2 display-5 mt-5 ">
                Code Along:{" "}
              </div>
              <div className="col-md-12 col-lg-10 mt-5 text-start">
                <div className="ratio ratio-16x9 mt-5">
                  <iframe
                    src={lessonInformation[0].codeAlong}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {lessonInformation[0].lessonFiles && (
            <div className="row mt-5">
              <div className="col-md-12 col-lg-2 display-5 mt-5 ">Code: </div>
              <div className="col-md-12 col-lg-10 mt-5 text-center">
                <p className="fs-4 mt-5">
                  If you are having problems building the program, you can take
                  a look at what is supposed to look like, but try to build it
                  yourself before looking! (zoom in!)
                </p>
                {lessonInformation[0].lessonFiles.map((item) => {
                  objKey++;
                  return (
                    <img
                      key={objKey}
                      src={require(`../../public/lessonCodeImages/${item}`)}
                      className="img-fluid"
                      alt={item}
                    />
                  );
                })}
                <p className="fs-4 text-center">
                  Download it
                  <br />
                  <a
                    href="https://github.com/AsaelCorona115/mBotPrograms"
                    target="_blank"
                  >
                    here!
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualLesson;
