import Navbar from "../components/Navbar";
import CourseSelector from "./courseSelector";
import Footer from "./footer";

const CourseMainPage = () => {
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
            <p>In this course</p>
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
    </div>
  );
};

export default CourseMainPage;
