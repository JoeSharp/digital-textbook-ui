import * as React from "react";

import Button, { Props as ButtonProps } from "../Buttons/Button";

interface Props {
  title: string;
  text: string;
  buttonProps: ButtonProps;
}

const Card: React.FunctionComponent<Props> = ({ title, text, buttonProps }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Button {...buttonProps} />
      </div>
    </div>
  );
};

export default Card;
