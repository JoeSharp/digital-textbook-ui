import React from "react";
import RequestScaffold, { useRequestScaffold } from "../RequestScaffold";
import { IScaffoldedInstructions } from "../../../api/useQuestionApi/types";

interface Props {
  scaffoldedInstructions: IScaffoldedInstructions[];
}

const ScaffoldedInstructions: React.FunctionComponent<Props> = ({
  scaffoldedInstructions,
}) => {
  const { componentProps } = useRequestScaffold({
    levelCaptions: React.useMemo(
      () => scaffoldedInstructions.map((i) => i.caption),
      [scaffoldedInstructions]
    ),
  });

  const { index } = componentProps;

  return (
    <div>
      <RequestScaffold {...componentProps} />
      {scaffoldedInstructions
        .filter((_, i) => i === index)
        .map(({ caption, instructions }) => (
          <div key={caption}>
            {instructions.map((instruction, i) => (
              <p key={i}>{instruction}</p>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ScaffoldedInstructions;
