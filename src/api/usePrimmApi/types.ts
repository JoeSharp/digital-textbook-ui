import { IMongoDocument } from "../useDocumentApi/types";
import { IQuestionSet } from "../useQuestionApi/types";
import { IEmbeddedIframe } from "../useEmbeddedIframeApi/types";

export interface IPrimmPredict {
  codeWidget: IEmbeddedIframe;
  questionSets: IQuestionSet[];
}

export interface IPrimmRun {
  codeWidget: IEmbeddedIframe;
}
export interface IPrimmInvestigate {
  codeWidget: IEmbeddedIframe;
  questionSets: IQuestionSet[];
}
export interface IPrimmModify {
  instructions: string;
  codeWidget: IEmbeddedIframe;
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
