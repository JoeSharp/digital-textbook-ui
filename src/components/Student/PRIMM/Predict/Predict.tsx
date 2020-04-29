import React from "react";
import { IPrimmPredict } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";
import ScaffoldedQuestions from "../../Questions/ScaffoldedQuestions";

interface Props {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({
  predict: { codeWidget, scaffoldedQuestions },
}) => {
  return (
    <div>
      <h4>Predict</h4>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <ScaffoldedQuestions scaffoldedQuestions={scaffoldedQuestions} />
    </div>
  );
};

export default Predict;
