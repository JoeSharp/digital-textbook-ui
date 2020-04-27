import React from "react";
import { storiesOf } from "@storybook/react";
import Make from "./Make";
import { primmChallenges } from "../../../../testing/data";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Make", module).add(challenge.title, () => (
    <Make make={challenge.make} />
  ))
);
