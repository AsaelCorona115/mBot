//imports
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./scsulogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container-fluid colorbackground">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-md-12">
            <Link to="/" className="anyLink ">
              <img
                src={logo}
                className="img-thumbnail logo my-5"
                alt="SCSU Logo"
              />
            </Link>
          </div>

          <div className="col-lg-8 d-sm-none d-xs-none d-lg-flex align-middle ">
            <div className="container-fluid ">
              <div className="row my-5 fs-1">
                <div className="col-lg-4 col-md-12 mt-5">
                  <Link className="anyLink mainNavigationLink" to="/mBotCourse">
                    mBot
                  </Link>
                </div>
                <div className="col-lg-4 col-md-12 mt-5">
                  <Link
                    className="anyLink mainNavigationLink"
                    to="/ArtificialIntelligenceCourse"
                  >
                    AI
                  </Link>
                </div>
                <div className="col-lg-4 col-md-12 mt-5">
                  <Link
                    className="anyLink mainNavigationLink"
                    to="/AutomationCourse"
                  >
                    Automation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
