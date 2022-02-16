import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import CourseMainPage from "./components/courseMainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/mBotCourse">
              <CourseMainPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
