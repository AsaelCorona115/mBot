import Navbar from "../components/Navbar";
import CourseSelector from "./courseSelector";
import Footer from "./footer";
const Home = () => {
  return (
    <div className="home" style={{ marginTop: "100px " }}>
      <img
        src="https://cdn.rit.edu/images/program/2020-06/ai-banner.jpg"
        alt="NavbarBackground"
        className="navbarBackground"
      />
      <CourseSelector />
    </div>
  );
};

export default Home;
