import React from "react";
import Button from "../../Buttons/Button";
import { IQuestionSet } from "../../../../api/types";

interface Props {
  index: number;
  onRequestMoreHelp: () => void;
  canRequestMoreHelp: boolean;
  caption: string;
}

const RequestHelp: React.FunctionComponent<Props> = ({
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

export default RequestHelp;

interface RequestMoreHelpAction {
  type: "onRequestMoreHelp";
}
interface ResetAction {
  type: "reset";
}
type Action = RequestMoreHelpAction | ResetAction;

interface ReducerState {
  index: number;
  questionSets: IQuestionSet[];
  canRequestMoreHelp: boolean;
}

const helpReducer = (state: ReducerState, action: Action): ReducerState => {
  if (action.type === "onRequestMoreHelp") {
    if (state.index + 1 < state.questionSets.length) {
      return {
        ...state,
        index: state.index + 1,
        canRequestMoreHelp: state.index + 2 < state.questionSets.length,
      };
    }
  } else if (action.type === "reset") {
    return {
      ...state,
      index: 0,
      canRequestMoreHelp: state.questionSets.length > 1,
    };
  }
  return state;
};

// IN
interface InProps {
  questionSets: IQuestionSet[];
}

// OUT
interface UseRequestHelp {
  componentProps: Props;
}

export const useRequestHelp = ({ questionSets }: InProps): UseRequestHelp => {
  const [state, dispatch] = React.useReducer(helpReducer, {
    index: 0,
    canRequestMoreHelp: true,
    questionSets,
  });

  const onRequestMoreHelp = React.useCallback(
    () => dispatch({ type: "onRequestMoreHelp" }),
    []
  );

  return {
    componentProps: {
      ...state,
      onRequestMoreHelp,
      caption: questionSets[state.index].caption,
    },
  };
};
