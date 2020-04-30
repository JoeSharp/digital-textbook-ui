import React from "react";
import { storiesOf } from "@storybook/react";
import Make from "./Make";
import { primmChallenges } from "../../../../../testing/data";
import { testBaseProps } from "../testProps";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Make", module).add(challenge.title, () => (
    <Make make={challenge.make} {...testBaseProps} />
  ))
);
