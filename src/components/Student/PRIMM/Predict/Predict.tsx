import React from "react";
import { IPrimmPredict } from "../../../../types";

interface Props {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({ predict }) => {
  return <div>Predict {JSON.stringify(predict, null, 2)}</div>;
};

export default Predict;
