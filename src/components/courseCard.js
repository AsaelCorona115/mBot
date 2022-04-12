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
          <h1 className="text-white">{props.courseTitle}</h1>
          <p className="courseDescription fs-3">{props.description}</p>
          <Link className="anyLink" to={props.courseTitle + "Course"}>
            <button
              type="button"
              className="btn btn-outline-light courseButton fs-3"
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
