import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import CourseMainPage from "./components/courseMainPage";
import IndividualLesson from "./components/individualLesson";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* Home route */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* mBot Routes */}
            <Route path="/mBotCourse">
              <CourseMainPage
                courseName="mBot"
                description="Have you ever used an IDE? Do you know what a loop is? A conditional? No? Then this course is for you. If you have never written  line of code before, here you will learn about basic programming concepts that can be applied to any coding language, all while learning how to use the mBot! An affordable and educational robot that can be programmed using Scratch. Take you first steps to becoming a programmer!"
                courseImage="https://www.makeblock.com/wp-content/uploads/2018/08/mbot_1080720_banner.jpg"
                courseThumbnail="https://www.lifewire.com/thmb/4w7aNRiK7sYO7jfMO2jTNhcTeK8=/1500x1500/filters:no_upscale()/_hero_SQ_3LW4149488-1-4313fb506d5641ba9f814f50f9047e9c.jpg"
              />
            </Route>

            <Route path="/mBotLessons/:key">
              <IndividualLesson courseName="mBot" />
            </Route>

            {/* Automation Routes */}
            <Route path="/AutomationCourse">
              <CourseMainPage
                courseName="Automation"
                description="Insert Automation Description Here"
                courseImage="https://www.business2community.com/wp-content/uploads/2021/02/rpa-cognitive-blog-img.jpg"
                courseThumbnail="https://assets.bizclikmedia.net/668/66531659f683f10c5db2fd216a0f177d:2a7aac35219e987d4a70a25b69379a2d/gettyimages-1287582736.jpg"
              />
            </Route>

            <Route path="/AutomationLessons/:key">
              <IndividualLesson courseName="Automation" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
