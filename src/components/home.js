import Navbar from "../components/Navbar";
import CourseSelector from "./courseSelector";
import Footer from "./footer";
const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid homeBannerContainer d-flex align-items-center justify-content-end">
        <div className="row ">
          <div className="col-12">
            <h1 style={{ fontSize: "4rem" }}>Want to learn how to code?</h1>
          </div>
        </div>
      </div>
      <CourseSelector />
    </div>
  );
};

export default Home;
