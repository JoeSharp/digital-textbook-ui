import * as React from "react";
import { addDecorator } from "@storybook/react";

import useMockServer from "../src/lib/api/useMockServer";

addDecorator(storyFn => {
  const isMockServerReady = useMockServer();

  return isMockServerReady ? storyFn() : <div>Foo</div>;
});
