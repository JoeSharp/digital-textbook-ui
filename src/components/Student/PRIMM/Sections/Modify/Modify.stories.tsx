import React from "react";
import { storiesOf } from "@storybook/react";
import Modify from "./Modify";
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
  const studentResponse = useObjectReducer(EMPTY_PRIMM_WORK.modify);

  const testBaseProps = createTestBaseProps(studentResponse);

  return <Modify modify={challenge.modify} {...testBaseProps} />;
};

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Modify", module).add(
    challenge.title,
    () => <TestHarness challenge={challenge} />
  )
);
