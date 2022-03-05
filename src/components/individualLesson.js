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
  let objKey = -1;

  return (
    <div className="individualLesson">
      {lessonInformation && (
        <div className="container-fluid mt-5 lessonContainer">
          <div className="row">
            {/* Lesson Header */}
            <div className="col-12 d-flex lessonHeader">
              <h1 className="display-1 fw-bolder">
                Lesson Number {lessonInformation[0].lessonNumber} :{" "}
                {lessonInformation[0].lessonTitle}
              </h1>
            </div>
          </div>

          {/* Main content row */}
          <div className="row">
            {/* First Column, second on smaller devices */}
            <div className="col-lg-12 col-xl-6 order-lg-2">
              {/* Nested Container */}
              <div className="container-fluid">
                {/* Code Along Video */}
                <div className="row">
                  <div className="col-12">
                    {lessonInformation[0].codeAlong ? (
                      <>
                        <br />
                        <h1>Code Along</h1>
                        <br />
                        <div className="ratio ratio-16x9">
                          <iframe
                            src={lessonInformation[0].codeAlong}
                            title="YouTube video"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <br />
                        <br />
                      </>
                    ) : (
                      <>
                        <p className="fs-4">There's no code along :(</p>
                      </>
                    )}
                  </div>
                </div>
                {/* Objectives Row */}
                <div className="row">
                  <div className="col-12">
                    {lessonInformation[0].lessonObjectives ? (
                      <>
                        <h1>Objectives: </h1>
                        <ol className="mainText">
                          {lessonInformation[0].lessonObjectives.map(
                            (objective) => {
                              objKey++;
                              return (
                                <li className="fs-3" key={objKey}>
                                  {objective}
                                </li>
                              );
                            }
                          )}
                        </ol>
                      </>
                    ) : (
                      <>
                        <h1>Objectives: </h1>
                        <p className="fs-3">
                          There are no objectives for this lesson ;)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Requirements Row */}
                <div className="row">
                  <div className="col-12">
                    <br />
                    <h2>Requirements:</h2>
                    <br />

                    {lessonInformation[0].lessonRequirements.length != 0 ? (
                      lessonInformation[0].lessonRequirements.map((item) => {
                        objKey++;
                        return (
                          <img
                            key={objKey}
                            src={require(`../../public/mBotComponents/${item}.png`)}
                            className="img-thumbnail img-fluid rounded-circle border-dark"
                            alt={item}
                          />
                        );
                      })
                    ) : (
                      <p className="fs-4">
                        No components are used in this lesson
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
            {/* Second Column, first on smaller devices  */}
            <div className="col-lg-12 col-xl-6 order-lg-1">
              {/* Second nested container */}
              <div className="container-fluid">
                {/* Presentation Row */}
                <div className="row">
                  <div className="col-12">
                    <br />
                    <h1>Presentation: </h1>
                    <br />
                    {lessonInformation[0].lessonPresentation ? (
                      <p className="fs-3">
                        {lessonInformation[0].lessonPresentation}
                      </p>
                    ) : (
                      <>
                        <p className="fs-3">
                          There's no analysis required for this lesson, is
                          simple!
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Analysis Row */}
                <div className="row">
                  <div className="col-12">
                    <br />
                    <h2>Analysis</h2>
                    <br />

                    {lessonInformation[0].lessonAnalysis ? (
                      <p className="fs-3">
                        {lessonInformation[0].lessonAnalysis}
                      </p>
                    ) : (
                      <p className="fs-3">
                        There's no analysis required for this lesson, is simple!
                      </p>
                    )}
                  </div>
                </div>

                {/* Design Row */}
                <div className="row">
                  <div className="class-12">
                    {lessonInformation[0].lessonDesign ? (
                      <>
                        <br />
                        <br />
                        <h2>Design</h2>
                        <p className="fs-4">
                          Before we dive any further into the program, take a
                          look at this:
                        </p>
                        <img
                          className="diagramImage"
                          src={require(`../../public/lessonFlowCharts/${lessonInformation[0].lessonDesign}`)}
                          alt=""
                        />
                        <p className="fs-4">
                          We will check this diagram in the code along, however
                          try to understand without the video first.
                        </p>
                        <br />
                        <br />
                      </>
                    ) : (
                      <>
                        <h2>Design</h2>
                        <p className="fs-4">
                          There's no design involved in this section. Whew!
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {lessonInformation[0].lessonFiles && (
            <div className="row ">
              <div className="col-12">
                <br />
                <br />
                <h2>Result</h2>
                <br />
                <br />
                <p className="fs-4">
                  If you are having problems building the program, you can take
                  a look at what is supposed to look like, but try to build it
                  yourself before looking!
                </p>
                <br />
                <br />
                <img
                  src={require(`../../public/lessonCodeImages/${lessonInformation[0].lessonFiles[0]}`)}
                  className="img codeResult"
                  alt={lessonInformation[0].lessonFiles[0]}
                />

                <br />
                <br />

                <p className="fs-4">
                  Download it
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

          {lessonInformation[0].extras && (
            <div className="row extras">
              <div className="col-12">
                <br />
                <br />
                <h2>Extras!</h2>
                <br />
                <br />
                <p className="fs-4">{lessonInformation[0].extras}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualLesson;
