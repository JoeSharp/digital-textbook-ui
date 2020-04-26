import { IEmbeddedIframeSystem, IQuestionType } from "../../../api/types";
import {
  IPrimmChallengeDoc,
  IPrimmChallenge,
} from "../../../api/usePrimmApi/types";
import { createDocument } from "../testDataUtils";

export const challenge: IPrimmChallengeDoc = createDocument<IPrimmChallenge>({
  title: "Loops",
  description: "Discover what loops are, how they work and how to write them",
  predict: {
    embeddedId: "0bd9bece4f",
    system: IEmbeddedIframeSystem.Trinket,
    help: [
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
});
