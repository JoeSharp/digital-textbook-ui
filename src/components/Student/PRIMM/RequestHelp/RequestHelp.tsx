import React from "react";
import Button from "../../../GeneralPurpose/Buttons/Button";

interface Props {
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
