import React from "react";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div>
      <h1>Teach Code</h1>
      <p>
        <small>
          You are running this application in <b>development</b> mode.
        </small>
      </p>
    </div>
  );
};

export default Header;
