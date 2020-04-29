import React from "react";
import { IPrimmMake } from "../../../../../api/usePrimmApi/types";
import Section, { BaseProps } from "../Section";

interface Props extends BaseProps {
  make: IPrimmMake;
}

const Modify: React.FunctionComponent<Props> = ({
  make: { instructions },
  ...rest
}) => {
  return (
    <Section title="Make" {...rest}>
      <p>{instructions}</p>
    </Section>
  );
};

export default Modify;
