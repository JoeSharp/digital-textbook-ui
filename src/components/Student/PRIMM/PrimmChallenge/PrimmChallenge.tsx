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

interface Props {
  challenge: IPrimmChallengeDoc;
}

export const PrimmChallenge: React.FunctionComponent<Props> = ({
  challenge,
}) => {
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

      {currentSection === "predict" && (
        <Predict predict={predict} {...sectionHandlers} />
      )}
      {currentSection === "run" && <Run run={run} {...sectionHandlers} />}
      {currentSection === "investigate" && (
        <Investigate investigate={investigate} {...sectionHandlers} />
      )}
      {currentSection === "modify" && (
        <Modify modify={modify} {...sectionHandlers} />
      )}
      {currentSection === "make" && <Make make={make} {...sectionHandlers} />}
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
