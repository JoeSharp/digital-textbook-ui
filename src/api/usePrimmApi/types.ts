import { IMongoDocument, IQuestion, IEmbeddedIframeSystem } from "../types";

export interface IHelpLevel {
  caption: string;
}

export interface IQuestionSet {
  levelCaption: string;
  questions: IQuestion[];
}

export interface IPrimmPredict {
  embeddedId: string;
  system: IEmbeddedIframeSystem;
  help: IQuestionSet[];
}

export interface IPrimmChallenge {
  title: string;
  description: string;
  predict: IPrimmPredict;
}

export type IPrimmChallengeDoc = IPrimmChallenge & IMongoDocument;
