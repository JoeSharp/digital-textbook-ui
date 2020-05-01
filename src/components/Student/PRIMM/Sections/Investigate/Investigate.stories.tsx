import React from "react";
import { storiesOf } from "@storybook/react";
import Investigate from "./Investigate";
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
  const studentResponse = useObjectReducer(EMPTY_PRIMM_WORK.investigate);

  const testBaseProps = createTestBaseProps(studentResponse);

  return <Investigate investigate={challenge.investigate} {...testBaseProps} />;
};

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Investigate", module).add(
    challenge.title,
    () => <TestHarness challenge={challenge} />
  )
);
