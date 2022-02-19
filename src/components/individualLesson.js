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
  let reqKey = -1;

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
          <br />
          <br />
          {lessonInformation[0].lessonRequirements && (
            <div className="row lessonReq">
              <div className="col-12">
                <br />
                <h2>Requirements:</h2>
                <br />
                <ol className="mainText">
                  {lessonInformation[0].lessonRequirements.map(
                    (requirement) => {
                      reqKey++;
                      return <li key={reqKey}>{requirement}</li>;
                    }
                  )}
                </ol>
                <br />
                <br />
              </div>
            </div>
          )}

          {lessonInformation[0].lessonAnalysis && (
            <div className="row lessonAnalysis">
              <div className="col-12">
                <br />
                <h2>Analysis</h2>
                <br />
                <p className="mainText">
                  {lessonInformation[0].lessonAnalysis}
                </p>
                <br />
                <br />
              </div>
            </div>
          )}

          {lessonInformation[0].lessonDesign && (
            <div className="row lessonDesign">
              <div className="col-12">
                <br />
                <br />
                <h2>Design</h2>
                <p className="mainText">
                  Before we dive any further into the program, take a look at
                  this:
                </p>
                <img
                  className="diagramImage"
                  src={require(`../../public/lessonFlowCharts/${lessonInformation[0].lessonDesign}`)}
                  alt=""
                />
                <p className="mainText">
                  We will check this diagram in the code along, however try to
                  understand without the video first.
                </p>

                <br />
                <br />
              </div>
            </div>
          )}

          {lessonInformation[0].codeAlong && (
            <div className="row codeAlong">
              <div className="col-12">
                <br />
                <br />
                <h2>Code Along</h2>
                <br />
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
                <p className="mainText">{lessonInformation[0].extras}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndividualLesson;
