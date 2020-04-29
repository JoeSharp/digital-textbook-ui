import React from "react";
import { storiesOf } from "@storybook/react";
import Predict from "./Predict";
import { primmChallenges } from "../../../../../testing/data";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Sections/Predict", module).add(
    challenge.title,
    () => (
      <Predict
        predict={challenge.predict}
        onComplete={() => {}}
        isComplete={false}
      />
    )
  )
);
