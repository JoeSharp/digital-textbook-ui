// Questions
export enum IQuestionType {
  MultipleChoice = "MultipleChoice",
  FreeFlowWithClue = "FreeFlowWithClue",
  FreeFlow = "FreeFlow",
}

interface IBaseQuestion {
  type: IQuestionType;
  question: string;
}

export interface IMultipleChoiceQuestion extends IBaseQuestion {
  type: IQuestionType.MultipleChoice;
  correctOption: string;
  options: string[];
}

export interface IFreeFlowWithClueQuestion extends IBaseQuestion {
  type: IQuestionType.FreeFlowWithClue;
  clue: string;
}

export interface IFreeFlowQuestion extends IBaseQuestion {
  type: IQuestionType.FreeFlow;
}

export type IQuestion =
  | IMultipleChoiceQuestion
  | IFreeFlowWithClueQuestion
  | IFreeFlowQuestion;

export interface IScaffoldedQuestions {
  caption: string;
  questions: IQuestion[];
}

export interface IScaffoldedInstructions {
  caption: string;
  instructions: string[];
}
