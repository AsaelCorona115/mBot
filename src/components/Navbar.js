//imports
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./scsulogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          <div className="col-4">
            <Link to="/" className="anyLink">
              <img src={logo} className="img-thumbnail logo" alt="SCSU Logo" />
            </Link>
          </div>

          <div className="col-6 d-flex align-middle">
            <div className="container-fluid">
              <div className="row">
                <div className="col-4 mt-5">
                  <Link className="anyLink mainNavigationLink" to="/mBotCourse">
                    mBot
                  </Link>
                </div>
                <div className="col-4 mt-5">
                  <Link
                    className="anyLink mainNavigationLink"
                    to="/MatLabCourse"
                  >
                    MatLab
                  </Link>
                </div>
                <div className="col-4 mt-5">
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
