import * as React from "react";
import { storiesOf } from "@storybook/react";
import JsonDebug from "../JsonDebug";
import useToggle from "./useToggle";

const TestHarness: React.FunctionComponent = () => {
  const { value, toggle } = useToggle();

  return (
    <div>
      <button className="btn btn-primary" onClick={toggle}>
        Click Me!
      </button>
      <JsonDebug value={{ value }} />
    </div>
  );
};

storiesOf("lib/useToggle", module).add("simple", () => <TestHarness />);
