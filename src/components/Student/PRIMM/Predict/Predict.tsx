import React from "react";
import { IPrimmPredict } from "../../../../api/usePrimmApi/types";

interface Props {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({ predict }) => {
  return (
    <div>
      <h4>Predict</h4>
    </div>
  );
};

export default Predict;
