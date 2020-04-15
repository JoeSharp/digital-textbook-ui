import React from "react";

import { Link } from "react-router-dom";

import useAppNavigation from "../../../lib/useAppNavigation";

const NavBar: React.FunctionComponent = () => {
  const {
    urlGenerator: { goToAdminCourses },
  } = useAppNavigation();

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
      <span className="navbar-brand">Digital Textbook</span>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={goToAdminCourses()}>
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
