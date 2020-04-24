import React from "react";
import Predict from "../Predict";
import { IPrimmChallengeDoc } from "../../../../types";
import { useSinglePrimmChallengeApi } from "../../../../api/usePrimmApi";

interface Props {
  challenge: IPrimmChallengeDoc;
}

export const PrimmChallenge: React.FunctionComponent<Props> = ({
  challenge,
}) => {
  return (
    <div>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <h2>Predict</h2>
      <Predict predict={challenge.predict} />
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
