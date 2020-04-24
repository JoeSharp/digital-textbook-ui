import React from "react";
import usePrimmApi from "../../../../api/usePrimmApi";
import { IPrimmChallengeDoc } from "../../../../types";
import useAppNavigation from "../../../../lib/useAppNavigation";
import Button from "../../../GeneralPurpose/Buttons/Button";

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
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Go</th>
        </tr>
      </thead>
      <tbody>
        {challengesWithHandlers.map(({ challenge, onAttempt }) => (
          <tr key={challenge._id}>
            <td>{challenge.title}</td>
            <td>{challenge.description}</td>
            <td>
              <Button text="Attempt" styleType="primary" onClick={onAttempt} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PrimmChooser;
