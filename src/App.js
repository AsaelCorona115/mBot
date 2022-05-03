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
                courseImage="https://www.lifewire.com/thmb/4w7aNRiK7sYO7jfMO2jTNhcTeK8=/1500x1500/filters:no_upscale()/_hero_SQ_3LW4149488-1-4313fb506d5641ba9f814f50f9047e9c.jpg"
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
                description="Ever hear about these darned bots and scrapers taking all the latest ps5s? Want to learn how to design one yourself? Maybe, you just have some annoying daily task you’d like to Automate. Or perhaps you’d like to just take a couple devices and systems and make them work together. Either way in this course you’ll be learning how to get started with Automation. Our first lesson will start you off getting setup to use Python Selenium as it’s the friendliest automation tool out there. "
                courseImage="https://www.business2community.com/wp-content/uploads/2021/02/rpa-cognitive-blog-img.jpg"
                courseThumbnail="https://assets.bizclikmedia.net/668/66531659f683f10c5db2fd216a0f177d:2a7aac35219e987d4a70a25b69379a2d/gettyimages-1287582736.jpg"
              />
            </Route>

            <Route path="/AutomationLessons/:key">
              <IndividualLesson courseName="Automation" />
            </Route>

            {/* Artificial Intelligence Routes */}
            <Route path="/ArtificialIntelligenceCourse">
              <CourseMainPage
                courseName="ArtificialIntelligence"
                description="Ever wondered what is AI? Heard of Object Detection? Or maybe seen one of those cool moves where they use a camera system to identify an individual in a crowd? While this course won’t be getting that advanced, we will touch on how to get you started on a couple of different systems with as little coding as possible. However we deeply encourage getting familiar with the Concepts that gave birth to these systems."
                courseImage="https://cdn.corporatefinanceinstitute.com/assets/artificial-intelligence.jpeg"
                courseThumbnail="https://assets.bizclikmedia.net/668/66531659f683f10c5db2fd216a0f177d:2a7aac35219e987d4a70a25b69379a2d/gettyimages-1287582736.jpg"
              />
            </Route>

            <Route path="/ArtificialIntelligenceLessons/:key">
              <IndividualLesson courseName="ArtificialIntelligence" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
