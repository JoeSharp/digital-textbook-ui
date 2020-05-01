import React from "react";
import { storiesOf } from "@storybook/react";
import Make from "./Make";
import { primmChallenges } from "../../../../../testing/data";
import { createTestBaseProps } from "../testProps";
import {
  IPrimmChallengeDoc,
  EMPTY_PRIMM_WORK,
} from "../../../../../api/usePrimmApi/types";
import useObjectReducer from "../../../../../lib/useObjectReducer";

interface Props {
  challenge: IPrimmChallengeDoc;
}

const TestHarness: React.FunctionComponent<Props> = ({ challenge }) => {
  const studentResponse = useObjectReducer(EMPTY_PRIMM_WORK.make);

  const testBaseProps = createTestBaseProps(studentResponse);

  return <Make make={challenge.make} {...testBaseProps} />;
};

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Make", module).add(challenge.title, () => (
    <TestHarness challenge={challenge} />
  ))
);
