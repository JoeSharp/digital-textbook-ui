import React from "react";
import { storiesOf } from "@storybook/react";
import JsonDebug from "../../../../lib/JsonDebug";
import useCurrentSection from "./useCurrentSection";
import { primmChallenges } from "../../../../testing/data";
import { IPrimmChallengeDoc } from "../../../../api/usePrimmApi/types";

interface Props {
  challenge: IPrimmChallengeDoc;
}
const TestHarness: React.FunctionComponent<Props> = ({ challenge }) => {
  const { onSectionComplete, onReset, ...rest } = useCurrentSection({
    challenge,
  });

  return (
    <div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onSectionComplete}>Complete Section</button>
      <JsonDebug value={{ ...rest }} />
    </div>
  );
};

primmChallenges.forEach((challenge) =>
  storiesOf(
    "Student/PRIMM/Challenge/useCurrentSection",
    module
  ).add(challenge.title, () => <TestHarness challenge={challenge} />)
);
