import React from "react";
import { IPrimmMake } from "../../../../api/usePrimmApi/types";

interface Props {
  make: IPrimmMake;
}

const Modify: React.FunctionComponent<Props> = ({ make: { instructions } }) => {
  return (
    <div>
      <h4>Make</h4>
      <p>{instructions}</p>
    </div>
  );
};

export default Modify;
