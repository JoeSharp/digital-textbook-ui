import React from "react";
import { storiesOf } from "@storybook/react";
import EmbeddedTrinket from "./EmbeddedTrinket";
import {
  IEmbeddedIframeSystem,
  IEmbeddedTrinket,
} from "../../../../api/useEmbeddedIframeApi/types";
import EmbeddedTrinketBuilder from "./EmbeddedTrinketBuilder";
import Button from "../../Buttons/Button";

const TestHarness: React.FunctionComponent = () => {
  const [workingTrinket, onChange] = React.useState<IEmbeddedTrinket>({
    system: IEmbeddedIframeSystem.Trinket,
    trinketId: "0bd9bece4f",
  });

  const [trinket, setTrinket] = React.useState<IEmbeddedTrinket>();

  const onCommit = React.useCallback(() => setTrinket(workingTrinket), [
    workingTrinket,
    setTrinket,
  ]);

  return (
    <div>
      <EmbeddedTrinketBuilder value={workingTrinket} onChange={onChange} />
      <Button onClick={onCommit} text="Commit Changes" styleType="primary" />
      {trinket && <EmbeddedTrinket trinket={trinket} />}
    </div>
  );
};

storiesOf("General Purpose/Embedded Iframe/Trinket", module).add(
  "withBuilder",
  () => <TestHarness />
);
