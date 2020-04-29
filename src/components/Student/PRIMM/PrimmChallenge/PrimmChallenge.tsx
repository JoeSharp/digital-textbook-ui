import React from "react";
import Predict from "../Sections/Predict";
import Run from "../Sections/Run";
import Investigate from "../Sections/Investigate";
import Modify from "../Sections/Modify";
import Make from "../Sections/Make";
import { IPrimmChallengeDoc } from "../../../../api/usePrimmApi/types";
import { useSinglePrimmChallengeApi } from "../../../../api/usePrimmApi";
import useCurrentSection from "./useCurrentSection";

interface Props {
  challenge: IPrimmChallengeDoc;
}

export const PrimmChallenge: React.FunctionComponent<Props> = ({
  challenge,
}) => {
  const {
    completedSections,
    currentSection,
    onSectionComplete,
  } = useCurrentSection({
    challenge,
  });

  const {
    title,
    description,
    predict,
    run,
    investigate,
    modify,
    make,
  } = challenge;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      {completedSections.includes("predict") && (
        <Predict
          predict={predict}
          onComplete={onSectionComplete}
          isComplete={currentSection !== "predict"}
        />
      )}
      {completedSections.includes("run") && (
        <Run
          run={run}
          onComplete={onSectionComplete}
          isComplete={currentSection !== "run"}
        />
      )}
      {completedSections.includes("investigate") && (
        <Investigate
          investigate={investigate}
          onComplete={onSectionComplete}
          isComplete={currentSection !== "investigate"}
        />
      )}
      {completedSections.includes("modify") && (
        <Modify
          modify={modify}
          onComplete={onSectionComplete}
          isComplete={currentSection !== "modify"}
        />
      )}
      {completedSections.includes("make") && (
        <Make
          make={make}
          onComplete={onSectionComplete}
          isComplete={currentSection !== "make"}
        />
      )}
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
