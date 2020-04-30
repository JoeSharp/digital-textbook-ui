import React, { Reducer } from "react";

interface Props<T> {
  sections: T[];
}

interface UseCurrentSection<T> extends ReducerState<T> {
  current: T;
  canGoNext: boolean;
  onNext: () => void;
  canGoPrevious: boolean;
  onPrevious: () => void;
  onReset: () => void;
}

interface ReducerState<T> {
  index: number;
  sections: T[];
}

type Action = "reset" | "previous" | "next";

const reducer = <T extends {}>(
  state: ReducerState<T>,
  action: Action
): ReducerState<T> => {
  if (action === "reset") {
    return {
      sections: state.sections,
      index: 0,
    };
  } else if (action === "previous") {
    if (state.index > 0) {
      return {
        sections: state.sections,
        index: state.index - 1,
      };
    }
  } else if (action === "next") {
    if (state.index < state.sections.length - 1) {
      return {
        sections: state.sections,
        index: state.index + 1,
      };
    }
  }
  return state;
};

const useProgress = <T extends {}>({
  sections,
}: Props<T>): UseCurrentSection<T> => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<ReducerState<T>, Action>
  >(reducer, {
    index: 0,
    sections,
  });

  return {
    ...state,
    current: state.sections[state.index] as T,
    onReset: React.useCallback(() => dispatch("reset"), []),
    canGoNext: state.index + 1 < state.sections.length,
    onNext: React.useCallback(() => dispatch("next"), []),
    canGoPrevious: state.index > 0,
    onPrevious: React.useCallback(() => dispatch("previous"), []),
  };
};

export default useProgress;
