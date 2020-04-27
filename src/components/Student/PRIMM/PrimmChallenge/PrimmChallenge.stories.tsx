import React from "react";
import { storiesOf } from "@storybook/react";
import PrimmChallenge from "./PrimmChallenge";
import { primmChallenges } from "../../../../testing/data";

primmChallenges.forEach((challenge) =>
  storiesOf("Student/PRIMM/Challenge", module).add(challenge.title, () => (
    <PrimmChallenge challengeId={challenge._id} />
  ))
);
