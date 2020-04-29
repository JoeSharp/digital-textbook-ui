import React from "react";
import { storiesOf } from "@storybook/react";
import ScaffoldedInstructions from "./ScaffoldedInstructions";
import scaffoldedInstructions from "../../../testing/data/primm/scaffoldedInstructions";

storiesOf("Student/Scaffolded Instructions", module).add("basic", () => (
  <ScaffoldedInstructions scaffoldedInstructions={scaffoldedInstructions} />
));
