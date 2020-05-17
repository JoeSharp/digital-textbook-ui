import React from "react";
import { storiesOf } from "@storybook/react";
import Predict from "./Predict";
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
  const studentResponseControlProps = useObjectReducer(
    EMPTY_PRIMM_WORK.predict
  );

  const testBaseProps = createTestBaseProps(studentResponseControlProps);

  return <Predict predict={challenge.predict} {...testBaseProps} />;
};

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Predict", module).add(
    challenge.title,
    () => <TestHarness challenge={challenge} />
  )
);
