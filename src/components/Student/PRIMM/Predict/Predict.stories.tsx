import React from "react";
import { storiesOf } from "@storybook/react";
import Predict from "./Predict";
import { primmChallenges } from "../../../../testing/data";
import { IPrimmPredict } from "../../../../types";

const predict: IPrimmPredict = primmChallenges[0].predict;

const TestHarness: React.FunctionComponent = () => {
  return <Predict predict={predict} />;
};

storiesOf("Student/PRIMM/Predict", module).add("basic", () => <TestHarness />);
