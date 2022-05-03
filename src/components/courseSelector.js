import { useState } from "react";
import CourseCard from "./courseCard";
const CourseSelector = () => {
  const [courses, setCourses] = useState([
    {
      titleCourse: "mBot",
      imgsrc: "https://thumbs.gfycat.com/FlickeringBadBanteng-max-1mb.gif",
      CourseDescription:
        "Do you think programming is hard? Worry not! This course will help you learn basic concepts of programming in Scratch that are applicable to more advanced programming languages such as Python, C, or Javascript. All while working with the mBot! An affordable educational robot created for beginners!",
      key: "ACourse",
    },
    {
      titleCourse: "ArtificialIntelligence",
      CourseDescription:
        "Ever wondered what is AI? Heard of Object Detection?  While this course won’t be getting that advanced, we will touch on how to get you started on a couple of different systems with as little coding as possible. However we deeply encourage getting familiar with the Concepts that gave birth to these systems.",
      imgsrc:
        "https://logos-world.net/wp-content/uploads/2020/12/MATLAB-Symbol.jpg",
      key: "BCourse",
    },
    {
      titleCourse: "Automation",
      CourseDescription:
        "Maybe, you just have some annoying daily task you’d like to Automate. Or perhaps you’d like to just take a couple devices and systems and make them work together. In this course you’ll learn how to get started with Automation. Learn how to use Python Selenium,  the friendliest automation tool out there.",
      imgsrc:
        "https://enterprisersproject.com/sites/default/files/styles/google_discover/public/2021-09/cio_automation_ai.png?itok=Tc7MOn8n",
      key: "CCourse",
    },
  ]);

  const columnClass = "col-lg-" + 12 / courses.length + " col-md-6";

  return (
    <div className="container-fluid courseSelectorContainer">
      <div className="row courseSelectorTitle d-md-block">
        <div className="col-12 text-white ">
          <h1 className="display-3 colorbackground d-inline px-5 border rounded">
            Welcome to SCSU Robotics!
          </h1>
        </div>
      </div>

      <div className="row">
        {courses.map((item) => (
          <div className="col-lg-4 col-md-12" key={item.key}>
            <CourseCard
              courseTitle={item.titleCourse}
              imgsrc={item.imgsrc}
              description={item.CourseDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSelector;
