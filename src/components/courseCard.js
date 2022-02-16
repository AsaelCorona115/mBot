import { Link } from "react-router-dom";
const CourseCard = (props) => {
  return (
    <div className="container-fluid courseCard">
      <div className="row">
        <div className="col-12">
          <img
            src={props.imgsrc}
            alt="mBot Course"
            className="img-fluid courseThumbnail"
          />
          <h1>{props.courseTitle}</h1>
          <p className="courseDescription">{props.description}</p>
          <Link className="anyLink" to={props.courseTitle + "Course"}>
            <button
              type="button"
              className="btn btn-outline-light courseButton"
            >
              Check it out!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
