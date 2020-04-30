import { IQuestionType } from "../../../api/useQuestionApi/types";
import { IEmbeddedIframeSystem } from "../../../api/useEmbeddedIframeApi/types";
import {
  IPrimmChallengeDoc,
  IPrimmChallenge,
} from "../../../api/usePrimmApi/types";
import { createDocument } from "../testDataUtils";

export const challenge: IPrimmChallengeDoc = createDocument<IPrimmChallenge>({
  title: "Loops",
  description: "Discover what loops are, how they work and how to write them",

  predict: {
    codeWidget: {
      system: IEmbeddedIframeSystem.gitHubGist,
      gistId: "3a08be71dc0fd760141c0c6cddc96cdf",
    },
    scaffoldedQuestions: [
      {
        caption: "Free Flow",
        questions: [
          { type: IQuestionType.FreeFlow, question: "What does this code do?" },
        ],
      },
      {
        caption: "Clue",
        questions: [
          {
            type: IQuestionType.FreeFlowWithClue,
            clue:
              "A loop will execute the code block a number of times, the code block is the indented portion",
            question: "What will this code print to the screen?",
          },
        ],
      },
      {
        caption: "Leading",
        questions: [
          {
            type: IQuestionType.MultipleChoice,
            question: "How many times will it print 'ALPHA'?",
            correctOption: "4",
            options: ["1", "4", "5", "3"],
          },
          {
            type: IQuestionType.MultipleChoice,
            question: "How many times will it print 'BETA'?",
            correctOption: "4",
            options: ["1", "4", "5", "3"],
          },
          {
            type: IQuestionType.MultipleChoice,
            question: "How many times will it print 'CHARLIE'?",
            correctOption: "1",
            options: ["1", "4", "5", "3"],
          },
        ],
      },
    ],
  },
  run: {
    codeWidget: {
      system: IEmbeddedIframeSystem.Trinket,
      trinketId: "0bd9bece4f",
    },
  },
  investigate: {
    codeWidget: {
      system: IEmbeddedIframeSystem.Trinket,
      trinketId: "31a564c775",
    },
    scaffoldedQuestions: [
      {
        caption: "Free Flow",
        questions: [
          {
            type: IQuestionType.FreeFlow,
            question: "Read this code, and summaries what you think it does.",
          },
          {
            type: IQuestionType.FreeFlow,
            question:
              "Look at the number being passed into range, what do you notice about the number of times the loop executes?",
          },
          {
            type: IQuestionType.FreeFlow,
            question: "What do you think the format function does?",
          },
        ],
      },
    ],
  },
  modify: {
    scaffoldedInstructions: [
      {
        caption: "Open",
        instructions: ["Change the background colour to..."],
      },
      {
        caption: "Leading",
        instructions: [
          "Change the value passed into the background colour function...",
        ],
      },
      {
        caption: "Closed",
        instructions: [
          "Locate the call to background colour, and change the value from 'blue' to 'red'",
        ],
      },
    ],
    codeWidget: {
      system: IEmbeddedIframeSystem.Trinket,
      trinketId: "0bd9bece4f",
    },
  },
  make: {
    instructions: "Write your own shape",
  },
});
