import { IMongoDocument } from "../useDocumentApi/types";
import {
  IScaffoldedQuestions,
  IScaffoldedInstructions,
  IQuestionResponses,
  EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
} from "../useQuestionApi/types";
import { IEmbeddedIframe } from "../useEmbeddedIframeApi/types";

export interface IPrimmSection {
  codeWidget: IEmbeddedIframe;
}

export interface IPrimmPredict extends IPrimmSection {
  scaffoldedQuestions: IScaffoldedQuestions[];
}

export interface IPrimmRun extends IPrimmSection {}

export interface IPrimmInvestigate extends IPrimmSection {
  scaffoldedQuestions: IScaffoldedQuestions[];
}
export interface IPrimmModify extends IPrimmSection {
  scaffoldedInstructions: IScaffoldedInstructions[];
}
export interface IPrimmMake extends IPrimmSection {
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

export interface IPrimmRunResponse {
  predictionComparison: string;
}
export interface IPrimmRemixResponse {
  urlOfRemix: string;
}

export interface IPrimmWork {
  predict: IQuestionResponses;
  run: IPrimmRunResponse;
  investigate: IQuestionResponses;
  modify: IPrimmRemixResponse;
  make: IPrimmRemixResponse;
}

export const EMPTY_RUN_RESPONSE: IPrimmRunResponse = {
  predictionComparison: "",
};
export const EMPTY_URL_REMIX: IPrimmRemixResponse = { urlOfRemix: "" };

export const EMPTY_PRIMM_WORK: IPrimmWork = {
  predict: EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
  run: EMPTY_RUN_RESPONSE,
  investigate: EMPTY_SCAFFOLDED_QUESTION_RESPONSES,
  modify: EMPTY_URL_REMIX,
  make: EMPTY_URL_REMIX,
};
