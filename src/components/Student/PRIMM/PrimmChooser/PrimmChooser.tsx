import React from "react";
import usePrimmApi from "../../../../api/usePrimmApi";
import { IPrimmChallengeDoc } from "../../../../api/usePrimmApi/types";
import useAppNavigation from "../../../../lib/useAppNavigation";
import Card from "../../../GeneralPurpose/Card";

interface ChallengeWithHandlers {
  challenge: IPrimmChallengeDoc;
  onAttempt: () => void;
}

const PrimmChooser: React.FunctionComponent = () => {
  const { challenges } = usePrimmApi();
  const {
    nav: { goToAttemptPrimmChallenge },
  } = useAppNavigation();

  const challengesWithHandlers: ChallengeWithHandlers[] = React.useMemo(
    () =>
      challenges.map((challenge) => ({
        challenge,
        onAttempt: () => goToAttemptPrimmChallenge(challenge._id),
      })),
    [challenges, goToAttemptPrimmChallenge]
  );

  return (
    <div>
      {challengesWithHandlers.map(({ challenge, onAttempt }) => (
        <Card
          key={challenge._id}
          title={challenge.title}
          text={challenge.description}
          buttonProps={{
            text: "Select",
            styleType: "primary",
            onClick: onAttempt,
          }}
        />
      ))}
    </div>
  );
};

export default PrimmChooser;
