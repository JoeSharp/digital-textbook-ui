import React from "react";
import { storiesOf } from "@storybook/react";
import Run from "./Run";
import { primmChallenges } from "../../../../../testing/data";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Run", module).add(challenge.title, () => (
    <Run run={challenge.run} />
  ))
);
