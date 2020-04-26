import { IMongoDocument, IQuestionSet, IEmbeddedIframeSystem } from "../types";

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
