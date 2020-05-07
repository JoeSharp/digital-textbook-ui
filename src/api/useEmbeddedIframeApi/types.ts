export enum IEmbeddedIframeSystem {
  Trinket = "Trinket",
  p5js = "p5js",
  codeDotOrg = "codeDotOrg",
  codePen = "codePen",
  gitHubGist = "gitHubGist",
}

export interface QueryParamsObj {
  [key: string]: string;
}

export interface IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem;
}

// trinket
export enum ITrinketRunOption { // runOption = XXX
  console = "console",
  run = "run",
  either = "either",
}
export enum ITrinketOutputOption {
  codeAndOutputSideBySide = "codeAndOutputSideBySide",
  hideTheCode = "hideTheCode",
  codeOrOutputToggle = "codeOrOutputToggle",
}
export interface IEmbeddedTrinket extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.Trinket;
  trinketId: string;
  runOption?: ITrinketRunOption; // outputOnly = true, nothing if false
  outputOption?: ITrinketOutputOption; // toggleCode=true, nothing if false
  showInstructions?: boolean; // showInstructions=true, nothing if false
  autoRun?: boolean; // start=result if true, nothing if false
}

// codepen
export interface IEmbeddedCodePen extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.codePen;
  codePenId: string;
}

// code.org
export interface IEmbeddedCodeDotOrg extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.codeDotOrg;
  projectId: string;
}

// p5.js
export enum SketchEmbedType {
  embed,
  present,
  full,
  sketches,
}
export interface IEmbeddedP5Sketch extends IBaseEmbeddedIframe {
  system: IEmbeddedIframeSystem.p5js;
  sketchId: string;
  embedType: SketchEmbedType;
}

// github gist
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
