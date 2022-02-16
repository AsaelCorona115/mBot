//imports
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    { name: "mBot", key: 1 },
    { name: "MatLab", key: 2 },
    { name: "Automation", key: 3 },
  ]);
  const columnClass = "col-" + 12 / menuItems.length;

  return (
    <nav className="Navbar">
      <div className="container-fluid navigation-title">
        <div className="row">
          <div className="col-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Southern_Connecticut_Fighting_Owls_logo.svg/1200px-Southern_Connecticut_Fighting_Owls_logo.svg.png"
              alt="SCSU Owl"
              className="img-fluid header-img d-flex"
            />
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <h1>
              <Link to="/" className="page-header anyLink">
                SCSU Robotics
              </Link>
            </h1>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center">
            <img
              src="https://calendar.southernct.edu/live/resource/image/_i/extras/images/SCSU-logo-blue.rev.1584987060.png"
              alt="SCSU Owl"
              className="img-fluid header-img d-flex"
            />
          </div>
        </div>

        <div className="row align-items-center">
          {menuItems.map((item) => (
            <div className={columnClass + " menuSection"} key={item.key}>
              <Link className="anyLink" to={item.name + "Course"}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
