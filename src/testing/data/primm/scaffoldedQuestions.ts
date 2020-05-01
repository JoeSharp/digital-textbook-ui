import {
  IScaffoldedQuestions,
  IQuestionType,
} from "../../../api/useQuestionApi/types";

const scaffoldedQuestions: IScaffoldedQuestions[] = [
  {
    caption: "Freeform",
    questions: [
      {
        id: "openPredict",
        question: "What will this code do?",
        type: IQuestionType.FreeFlow,
      },
    ],
  },
  {
    caption: "Leading Questions",
    questions: [
      {
        id: "leadingLine3",
        question: "How many times will line 3 execute?",
        type: IQuestionType.FreeFlowWithClue,
        clue: "A for loop is used to execute a block of code multiple times",
      },
    ],
  },
  {
    caption: "Multiple Choice Questions",
    questions: [
      {
        id: "multiLine3",
        question: "How many times will line 3 execute?",
        type: IQuestionType.MultipleChoice,
        correctOption: "4",
        options: ["1,", "2", "3", "4"],
      },
    ],
  },
];

export default scaffoldedQuestions;
