import { IMongoDocument } from "../useDocumentApi/types";
import { IQuestionSet } from "../useQuestionApi/types";
import { IEmbeddedIframe } from "../useEmbeddedIframeApi/types";

interface IPrimmSection {
  codeWidget: IEmbeddedIframe;
}

export interface IPrimmPredict extends IPrimmSection {
  questionSets: IQuestionSet[];
}

export interface IPrimmRun extends IPrimmSection {}
export interface IPrimmInvestigate extends IPrimmSection {}
export interface IPrimmModify extends IPrimmSection {}
export interface IPrimmMake extends IPrimmSection {}

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
