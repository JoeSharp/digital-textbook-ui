import React from "react";
import { storiesOf } from "@storybook/react";
import Modify from "./Modify";
import { primmChallenges } from "../../../../../testing/data";
import { testBaseProps } from "../testProps";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Modify", module).add(
    challenge.title,
    () => <Modify modify={challenge.modify} {...testBaseProps} />
  )
);
