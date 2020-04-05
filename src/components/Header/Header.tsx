import React from "react";
import { FunctionComponent } from "react";
import useAppNavigation from "../../lib/useAppNavigation";

const Header: FunctionComponent = () => {
  const {
    nav: { goToCourses },
  } = useAppNavigation();

  return (
    <div>
      <h1>Teach Code</h1>
      <p>
        <small>
          You are running this application in <b>development</b> mode.
        </small>
      </p>
      <ul>
        <li>
          <button onClick={goToCourses}>Courses</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
