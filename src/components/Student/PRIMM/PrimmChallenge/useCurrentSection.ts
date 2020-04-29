import React from "react";
import {
  IPrimmChallengeDoc,
  IPrimmChallenge,
} from "../../../../api/usePrimmApi/types";

interface Props {
  challenge: IPrimmChallengeDoc;
}

interface UseCurrentSection extends ReducerState {
  currentSection: string;
  onSectionComplete: () => void;
  onReset: () => void;
}

interface ReducerState {
  index: number;
  presentSections: string[];
  completedSections: string[];
}

type Action = "reset" | "nextSection";

const reducer = (state: ReducerState, action: Action): ReducerState => {
  if (action === "reset") {
    return {
      completedSections: [state.presentSections[0]],
      presentSections: state.presentSections,
      index: 0,
    };
  } else if (action === "nextSection") {
    if (state.index < state.presentSections.length - 1) {
      return {
        completedSections: [
          ...state.completedSections,
          state.presentSections[state.index + 1],
        ],
        presentSections: state.presentSections,
        index: state.index + 1,
      };
    }
  }
  return state;
};

const useCurrentSection = ({ challenge }: Props): UseCurrentSection => {
  const presentSections = React.useMemo(() => {
    const p: (keyof IPrimmChallenge)[] = [];
    if (challenge.predict) p.push("predict");
    if (challenge.run) p.push("run");
    if (challenge.investigate) p.push("investigate");
    if (challenge.modify) p.push("modify");
    if (challenge.make) p.push("make");
    return p;
  }, [challenge]);

  const [state, dispatch] = React.useReducer(reducer, {
    index: 0,
    completedSections: [presentSections[0]],
    presentSections,
  });

  return {
    ...state,
    currentSection: state.presentSections[state.index],
    onReset: React.useCallback(() => dispatch("reset"), []),
    onSectionComplete: React.useCallback(() => dispatch("nextSection"), []),
  };
};

export default useCurrentSection;
