import React from "react";
import { storiesOf } from "@storybook/react";
import JsonDebug from "../JsonDebug";
import useCounter from "./useCounter";

const TestHarness: React.FunctionComponent = () => {
  const { value, increment } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <JsonDebug value={{ value }} />
    </div>
  );
};

storiesOf("lib/useCounter", module).add("basic", () => <TestHarness />);
