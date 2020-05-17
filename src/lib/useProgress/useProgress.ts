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

interface ResetAction {
  type: "reset";
}
interface PreviousAction {
  type: "previous";
}
interface NextAction {
  type: "next";
}
interface UpdateSectionsAction<T> {
  type: "updateSections";
  sections: T[];
}

type Action<T> =
  | ResetAction
  | PreviousAction
  | NextAction
  | UpdateSectionsAction<T>;

const reducer = <T extends {}>(
  state: ReducerState<T>,
  action: Action<T>
): ReducerState<T> => {
  if (action.type === "reset") {
    return {
      sections: state.sections,
      index: 0,
    };
  } else if (action.type === "previous") {
    if (state.index > 0) {
      return {
        sections: state.sections,
        index: state.index - 1,
      };
    }
  } else if (action.type === "next") {
    if (state.index < state.sections.length - 1) {
      return {
        sections: state.sections,
        index: state.index + 1,
      };
    }
  } else if (action.type === "updateSections") {
    return {
      sections: action.sections,
      index: 0,
    };
  }
  return state;
};

const useProgress = <T extends {}>({
  sections,
}: Props<T>): UseCurrentSection<T> => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<ReducerState<T>, Action<T>>
  >(reducer, {
    index: 0,
    sections,
  });

  React.useEffect(() => dispatch({ type: "updateSections", sections }), [
    sections,
  ]);

  return {
    ...state,
    current: state.sections[state.index] as T,
    onReset: React.useCallback(() => dispatch({ type: "reset" }), []),
    canGoNext: state.index + 1 < state.sections.length,
    onNext: React.useCallback(() => dispatch({ type: "next" }), []),
    canGoPrevious: state.index > 0,
    onPrevious: React.useCallback(() => dispatch({ type: "previous" }), []),
  };
};

export default useProgress;
