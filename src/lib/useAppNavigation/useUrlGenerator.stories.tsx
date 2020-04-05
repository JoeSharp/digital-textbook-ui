import * as React from "react";

import { storiesOf } from "@storybook/react";
import useUrlGenerator from "./useUrlGenerator";
import JsonDebug from "../JsonDebug";

const TestHarness: React.FunctionComponent = () => {
  const [lastFunction, setLastFunction] = React.useState<string | undefined>(
    undefined
  );
  const [lastUrl, setLastUrl] = React.useState<string | undefined>(undefined);
  const urlGenerator = useUrlGenerator();

  const onButtonClick = React.useCallback(
    (name, navigationFn: () => string) => {
      setLastFunction(name);
      setLastUrl(navigationFn());
    },
    [setLastFunction, setLastUrl]
  );

  return (
    <div>
      {Object.entries(urlGenerator)
        .map((k) => ({
          name: k[0],
          navigationFn: k[1],
        }))
        .map(({ name, navigationFn }) => (
          <div key={name}>
            <button onClick={() => onButtonClick(name, navigationFn)}>
              {name}
            </button>
          </div>
        ))}
      <JsonDebug value={{ lastFunction, lastUrl }} />
    </div>
  );
};

storiesOf("lib/useUrlGenerator", module).add("test", () => <TestHarness />);
