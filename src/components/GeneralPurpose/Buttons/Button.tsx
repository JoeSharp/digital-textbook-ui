import * as React from "react";

export interface Props {
  text: string;
  styleType:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  text,
  styleType,
  onClick,
}) => (
  <button className={`btn btn-${styleType}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
