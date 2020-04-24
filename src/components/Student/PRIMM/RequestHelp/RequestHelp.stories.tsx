import React from "react";
import { storiesOf } from "@storybook/react";
import RequestHelp from "./RequestHelp";
import { IHelpLevel } from "../../../../types";

interface RequestMoreHelpAction {
  type: "onRequestMoreHelp";
}
interface ResetAction {
  type: "reset";
}
type Action = RequestMoreHelpAction | ResetAction;

interface HelpReducerState {
  index: number;
  levels: IHelpLevel[];
  canRequestMoreHelp: boolean;
}

const helpReducer = (
  state: HelpReducerState,
  action: Action
): HelpReducerState => {
  if (action.type === "onRequestMoreHelp") {
    if (state.index + 1 < state.levels.length) {
      return {
        ...state,
        index: state.index + 1,
        canRequestMoreHelp: state.index + 2 < state.levels.length,
      };
    }
  } else if (action.type === "reset") {
    return {
      ...state,
      index: 0,
      canRequestMoreHelp: state.levels.length > 1,
    };
  }
  return state;
};

const HELP_LEVELS: IHelpLevel[] = [
  {
    caption: "Freeform",
  },
  {
    caption: "Leading Questions",
  },
  {
    caption: "Multiple Choice Questions",
  },
];

const TestHarness: React.FunctionComponent = () => {
  const [state, dispatch] = React.useReducer(helpReducer, {
    index: 0,
    canRequestMoreHelp: true,
    levels: HELP_LEVELS,
  });

  const onRequestMoreHelp = React.useCallback(
    () => dispatch({ type: "onRequestMoreHelp" }),
    []
  );

  return (
    <RequestHelp
      onRequestMoreHelp={onRequestMoreHelp}
      canRequestMoreHelp={state.canRequestMoreHelp}
      caption={state.levels[state.index].caption}
    />
  );
};

storiesOf("Student/PRIMM/Request Help", module).add("basic", () => (
  <TestHarness />
));
