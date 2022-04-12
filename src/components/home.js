import Navbar from "../components/Navbar";
import CourseSelector from "./courseSelector";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <div className="home" style={{ marginTop: "100px " }}>
        <CourseSelector />
      </div>

      <div className="container my-5">
        <h1>Hello from a Southern Owl!</h1>
        <div className="row">
          <div className="col-12">
            <img
              src={require(`./me.jpg`)}
              className="img-thumbnail rounded-circle border border-dark my-5"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="fs-3 text-lg-start  mt-5">
              My name is Victor Corona, and this project was made for CSC 400
              during the Spring 2022 semester. I am a senior student at Southern
              Connecticut State University and this was my CAPSTONE project.
              Although I spent most of my time spent at Southern learning
              technologies like Python, Javascript, and web development
              frameworks I wanted to create something for new students in
              Computer Science as an introduction to STEM in a simple and
              beginner friendly way. Although my parents couldn't go to college,
              they always taught me the importance of education and I wanted to
              make that accessible for everyone. Therefore I learned how to
              interact with the mBot and program in Scratch to challenge myself
              to learn something new and show others that STEM is for everyone
              and should not be a topic to be scared of. I hope you can learn
              something from this the same way I did and it motivates you to
              move forward in your programming journey. <br></br> <br />
              From an owl, <br />
              Victor Corona.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img
              src={require(`./SHETA.jpg`)}
              className="img-thumbnail rounded-circle border border-dark my-5"
            />
            <h1>
              Special thanks to my advisor and professor,
              <br />
              <br />
              Dr Alaa Sheta.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
