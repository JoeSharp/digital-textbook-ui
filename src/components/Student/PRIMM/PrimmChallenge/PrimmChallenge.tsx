import React from "react";
import Predict from "../Predict";
import Run from "../Run";
import Investigate from "../Investigate";
import Modify from "../Modify";
import Make from "../Make";
import { IPrimmChallengeDoc } from "../../../../api/usePrimmApi/types";
import { useSinglePrimmChallengeApi } from "../../../../api/usePrimmApi";

interface Props {
  challenge: IPrimmChallengeDoc;
}

export const PrimmChallenge: React.FunctionComponent<Props> = ({
  challenge: { title, description, predict, run, investigate, modify, make },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {predict && <Predict predict={predict} />}
      {run && <Run run={run} />}
      {investigate && <Investigate investigate={investigate} />}
      {modify && <Modify modify={modify} />}
      {make && <Make make={make} />}
    </div>
  );
};

interface PropsConnected {
  challengeId: string;
}

export const PrimmChallengeConnected: React.FunctionComponent<PropsConnected> = ({
  challengeId,
}) => {
  const { challenge } = useSinglePrimmChallengeApi({ challengeId });

  return challenge ? (
    <PrimmChallenge challenge={challenge} />
  ) : (
    <div>LOADING</div>
  );
};

export default PrimmChallengeConnected;
