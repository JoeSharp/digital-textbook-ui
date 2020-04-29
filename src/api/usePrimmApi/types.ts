import { IMongoDocument } from "../useDocumentApi/types";
import {
  IScaffoldedQuestions,
  IScaffoldedInstructions,
} from "../useQuestionApi/types";
import { IEmbeddedIframe } from "../useEmbeddedIframeApi/types";

export interface IPrimmPredict {
  codeWidget: IEmbeddedIframe;
  scaffoldedQuestions: IScaffoldedQuestions[];
}

export interface IPrimmRun {
  codeWidget: IEmbeddedIframe;
}
export interface IPrimmInvestigate {
  codeWidget: IEmbeddedIframe;
  scaffoldedQuestions: IScaffoldedQuestions[];
}
export interface IPrimmModify {
  codeWidget: IEmbeddedIframe;
  scaffoldedInstructions: IScaffoldedInstructions[];
}
export interface IPrimmMake {
  instructions: string;
}

export interface IPrimmChallenge {
  title: string;
  description: string;
  predict: IPrimmPredict;
  run: IPrimmRun;
  investigate: IPrimmInvestigate;
  modify: IPrimmModify;
  make: IPrimmMake;
}

export type IPrimmChallengeDoc = IPrimmChallenge & IMongoDocument;
