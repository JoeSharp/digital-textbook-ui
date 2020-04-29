import React from "react";
import Button from "../../GeneralPurpose/Buttons/Button";

interface Props {
  index: number;
  onRequestMoreHelp: () => void;
  canRequestMoreHelp: boolean;
  caption: string;
}

const RequestScaffold: React.FunctionComponent<Props> = ({
  onRequestMoreHelp,
  canRequestMoreHelp,
  caption,
}) => {
  return (
    <div>
      {caption}
      {canRequestMoreHelp && (
        <Button
          text="More Help"
          onClick={onRequestMoreHelp}
          styleType="primary"
        />
      )}
    </div>
  );
};

export default RequestScaffold;

interface RequestMoreHelpAction {
  type: "onRequestMoreHelp";
}
interface ResetAction {
  type: "reset";
}
type Action = RequestMoreHelpAction | ResetAction;

interface ReducerState {
  index: number;
  levelCaptions: string[];
  canRequestMoreHelp: boolean;
}

const helpReducer = (state: ReducerState, action: Action): ReducerState => {
  if (action.type === "onRequestMoreHelp") {
    if (state.index + 1 < state.levelCaptions.length) {
      return {
        ...state,
        index: state.index + 1,
        canRequestMoreHelp: state.index + 2 < state.levelCaptions.length,
      };
    }
  } else if (action.type === "reset") {
    return {
      ...state,
      index: 0,
      canRequestMoreHelp: state.levelCaptions.length > 1,
    };
  }
  return state;
};

// IN
interface InProps {
  levelCaptions: string[];
}

// OUT
interface UseRequestScaffold {
  componentProps: Props;
}

export const useRequestScaffold = ({
  levelCaptions,
}: InProps): UseRequestScaffold => {
  const [state, dispatch] = React.useReducer(helpReducer, {
    index: 0,
    canRequestMoreHelp: true,
    levelCaptions,
  });

  const onRequestMoreHelp = React.useCallback(
    () => dispatch({ type: "onRequestMoreHelp" }),
    []
  );

  return {
    componentProps: {
      ...state,
      onRequestMoreHelp,
      caption: levelCaptions[state.index],
    },
  };
};
