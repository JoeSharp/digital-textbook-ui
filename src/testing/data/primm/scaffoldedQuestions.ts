import {
  IScaffoldedQuestions,
  IQuestionType,
} from "../../../api/useQuestionApi/types";

export const openEndedQuestions: IScaffoldedQuestions = {
  caption: "Open Ended",
  questions: [
    {
      id: "openPredict",
      question: "What will this code do?",
      type: IQuestionType.FreeFlow,
    },
    {
      id: "openJudge",
      question: "How clear are the names of functions and variables?",
      type: IQuestionType.FreeFlow,
    },
  ],
};

export const leadingQuestions: IScaffoldedQuestions = {
  caption: "Leading Questions",
  questions: [
    {
      id: "leadingLine3",
      question: "How many times will line 3 execute?",
      type: IQuestionType.FreeFlowWithClue,
      clue: "A for loop is used to execute a block of code multiple times",
    },
    {
      id: "whatComments",
      question:
        "What comment would you write to describe how this code works to another developer?",
      type: IQuestionType.FreeFlowWithClue,
      clue:
        "Comments are free text items that can be embedded directly into code",
    },
  ],
};

export const multipleChoiceQuestions: IScaffoldedQuestions = {
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
};

const scaffoldedQuestions: IScaffoldedQuestions[] = [
  openEndedQuestions,
  leadingQuestions,
  multipleChoiceQuestions,
];

export default scaffoldedQuestions;
