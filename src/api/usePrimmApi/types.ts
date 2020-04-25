import { IMongoDocument, IQuestion, IEmbeddedIframeSystem } from "../types";

export interface IHelpLevel {
  caption: string;
}

export interface IPredictHelp {
  levelCaption: string;
  questions: IQuestion[];
}

export interface IPrimmPredict {
  embeddedId: string;
  system: IEmbeddedIframeSystem;
  help: IPredictHelp[];
}

export interface IPrimmChallenge {
  title: string;
  description: string;
  predict: IPrimmPredict;
}

export type IPrimmChallengeDoc = IPrimmChallenge & IMongoDocument;
