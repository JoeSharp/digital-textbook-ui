import React from "react";

import Button, { Props as ButtonProps } from "./Button";

export interface Props {
  buttons: ButtonProps[];
}

const ButtonBar: React.FunctionComponent<Props> = ({ buttons }) => (
  <div className="btn-toolbar" role="toolbar" aria-label="Course Actions">
    {buttons.map((button, i) => (
      <div key={i} className="btn-group mr-2" role="group" aria-label="Edit">
        <Button {...button} />
      </div>
    ))}
  </div>
);

export default ButtonBar;
