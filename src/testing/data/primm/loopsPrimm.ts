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
    questionSets: [
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
            question: "How many",
          },
        ],
      },
      {
        caption: "Leading",
        questions: [
          {
            type: IQuestionType.MultipleChoice,
            question: "How many times will it print 'hello'?",
            correctOption: "4",
            options: ["1", "4", "5", "3"],
          },
          {
            type: IQuestionType.MultipleChoice,
            question: "How many times will it print 'goodbye'?",
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
      trinketId: "0bd9bece4f",
    },
    questionSets: [],
  },
  modify: {
    instructions: "Change the background colour to...",
    codeWidget: {
      system: IEmbeddedIframeSystem.Trinket,
      trinketId: "0bd9bece4f",
    },
  },
  make: {
    instructions: "Write your own shape",
  },
});
