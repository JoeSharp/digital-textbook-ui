import React from "react";
import { IPrimmPredict } from "../../../../api/usePrimmApi/types";
import EmbeddedIframe from "../../../GeneralPurpose/EmbeddedIframe";
import QuestionSet from "../../Questions/QuestionSet";

interface Props {
  predict: IPrimmPredict;
}

const Predict: React.FunctionComponent<Props> = ({
  predict: { codeWidget, questionSets },
}) => {
  return (
    <div>
      <h4>Predict</h4>
      <EmbeddedIframe embeddedIframe={codeWidget} />
      <QuestionSet questionSets={questionSets} />
    </div>
  );
};

export default Predict;
