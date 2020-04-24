export interface IMongoDocument {
  _id: string;
}

export const getDocumentId = (doc: IMongoDocument) => doc._id;

export interface ICourse {
  name: string;
  description: string;
}

export type ICourseDoc = IMongoDocument & ICourse;

export interface ILesson {
  courseId: string;
  title: string;
  description: string;
}

export type ILessonDoc = IMongoDocument & ILesson;

export enum ITaskType {
  EmbeddedIframe = "EmbeddedIframe",
  FreeFlowText = "FreeFlowText",
}

export interface IBaseTask {
  lessonId: string;
  title: string;
  instruction: string;
  videoLink: string;
}

export interface ITaskEmbeddedIframe extends IBaseTask {
  type: ITaskType.EmbeddedIframe;
  iframe: IEmbeddedIframe;
}
export interface ITaskFreeFlowText extends IBaseTask {
  type: ITaskType.FreeFlowText;
}

export type ITask = ITaskEmbeddedIframe | ITaskFreeFlowText;

export type ITaskDoc = IMongoDocument & ITask;

export enum IEmbeddedIframeSystem {
  Trinket,
  p5js,
  codeDotOrg,
  codePen,
  gitHubGist,
}

export interface IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem;
}

export interface IEmbeddedTrinket extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.Trinket;
  trinketId: string;
}
export interface IEmbeddedCodePen extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.codePen;
  codePenId: string;
}
export interface IEmbeddedCodeDotOrg extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.codeDotOrg;
  projectId: string;
}
export interface IEmbeddedP5Sketch extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.p5js;
  sketchId: string;
}
export interface IEmbeddedGitHubGist extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.gitHubGist;
  gistId: string;
}

export type IEmbeddedIframe =
  | IEmbeddedTrinket
  | IEmbeddedCodePen
  | IEmbeddedCodeDotOrg
  | IEmbeddedP5Sketch
  | IEmbeddedGitHubGist;

export interface YouTubeLinkType {
  youTubeId: string;
  startTime?: number;
}

export interface IUser {
  emailAddress: string;
}

export type IUserDoc = IUser & IMongoDocument;

// Questions
interface IBaseQuestion {
  question: string;
}

export interface IMultipleChoiceQuestion extends IBaseQuestion {
  type: "MultipleChoice";
  correctOption: string;
  options: string[];
}

export interface IFreeFlowWithClueQuestion extends IBaseQuestion {
  type: "FreeFlowWithClue";
  clue: string;
}

export interface IFreeFlowQuestion extends IBaseQuestion {
  type: "FreeFlow";
}

export type IQuestion =
  | IMultipleChoiceQuestion
  | IFreeFlowWithClueQuestion
  | IFreeFlowQuestion;

// PRIMM
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
