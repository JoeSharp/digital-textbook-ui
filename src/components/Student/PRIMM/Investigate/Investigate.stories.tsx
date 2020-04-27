import React from "react";
import { storiesOf } from "@storybook/react";
import Investigate from "./Investigate";
import { primmChallenges } from "../../../../testing/data";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Investigate", module).add(challenge.title, () => (
    <Investigate investigate={challenge.investigate} />
  ))
);
