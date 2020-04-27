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
  challenge,
}) => {
  return (
    <div>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <Predict predict={challenge.predict} />
      <Run run={challenge.run} />
      <Investigate investigate={challenge.investigate} />
      <Modify modify={challenge.modify} />
      <Make make={challenge.make} />
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
