import React from "react";
import Predict from "../Sections/Predict";
import Run from "../Sections/Run";
import Investigate from "../Sections/Investigate";
import Modify from "../Sections/Modify";
import Make from "../Sections/Make";
import {
  IPrimmChallengeDoc,
  IPrimmChallenge,
} from "../../../../api/usePrimmApi/types";
import { useSinglePrimmChallengeApi } from "../../../../api/usePrimmApi";
import useProgress from "../../../../lib/useProgress";
import usePrimmWorkContent from "../../../../api/useMyWorkApi/usePrimmWorkContent";

interface Props {
  challenge: IPrimmChallengeDoc;
}

export const PrimmChallenge: React.FunctionComponent<Props> = ({
  challenge,
}) => {
  const {
    isDirty,
    isSaving,
    predictResponseControlProps,
    runResponseControlProps,
    investigateResponseControlProps,
    modifyResponseControlProps,
    makeResponseControlProps,
  } = usePrimmWorkContent(challenge._id);

  const sections: (keyof IPrimmChallenge)[] = React.useMemo(() => {
    const p: (keyof IPrimmChallenge)[] = [];
    if (challenge.predict) p.push("predict");
    if (challenge.run) p.push("run");
    if (challenge.investigate) p.push("investigate");
    if (challenge.modify) p.push("modify");
    if (challenge.make) p.push("make");
    return p;
  }, [challenge]);

  const { current: currentSection, ...sectionHandlers } = useProgress({
    sections,
  });

  return (
    <div>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <small>{isDirty ? "*" : isSaving ? "saving" : "saved"}</small>

      {currentSection === "predict" && (
        <Predict
          predict={challenge.predict}
          studentResponseControlProps={predictResponseControlProps}
          {...sectionHandlers}
        />
      )}
      {currentSection === "run" && (
        <Run
          run={challenge.run}
          studentResponseControlProps={runResponseControlProps}
          {...sectionHandlers}
        />
      )}
      {currentSection === "investigate" && (
        <Investigate
          investigate={challenge.investigate}
          studentResponseControlProps={investigateResponseControlProps}
          {...sectionHandlers}
        />
      )}
      {currentSection === "modify" && (
        <Modify
          modify={challenge.modify}
          studentResponseControlProps={modifyResponseControlProps}
          {...sectionHandlers}
        />
      )}
      {currentSection === "make" && (
        <Make
          make={challenge.make}
          studentResponseControlProps={makeResponseControlProps}
          {...sectionHandlers}
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
