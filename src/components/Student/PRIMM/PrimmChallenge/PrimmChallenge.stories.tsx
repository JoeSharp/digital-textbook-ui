import React from "react";
import { storiesOf } from "@storybook/react";
import PrimmChallenge from "./PrimmChallenge";
import { primmChallenges } from "../../../../testing/data";

const challengeId: string = primmChallenges[0]._id;

const TestHarness: React.FunctionComponent = () => {
  return <PrimmChallenge challengeId={challengeId} />;
};

storiesOf("Student/PRIMM/Challenge", module).add("basic", () => (
  <TestHarness />
));
