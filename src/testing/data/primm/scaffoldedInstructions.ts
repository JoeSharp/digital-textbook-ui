import { IScaffoldedInstructions } from "../../../api/useQuestionApi/types";

const scaffoldedInstructions: IScaffoldedInstructions[] = [
  {
    caption: "Open",
    instructions: ["Add code to draw more 3 squares"],
  },
  {
    caption: "Leading",
    instructions: ["Add 3 more calls to drawSquare"],
  },
  {
    caption: "Specific",
    instructions: [
      "Copy the existing call to draw square and change the values to make the code draw 3 more squares",
    ],
  },
];

export default scaffoldedInstructions;
