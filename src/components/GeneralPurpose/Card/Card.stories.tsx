import * as React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import JsonDebug from "../../../lib/JsonDebug";

const countReducer = (state: number, action: number) => {
  return (state += action);
};

const TestHarness: React.FunctionComponent = () => {
  const [clickCount, dispatch] = React.useReducer(countReducer, 0);
  const increment = React.useCallback(() => dispatch(1), []);

  return (
    <div>
      <Card
        title="Test Card"
        text="This shows what a card looks like"
        buttonProps={{
          text: "Increment Counter",
          styleType: "primary",
          onClick: increment,
        }}
      />
      <JsonDebug value={{ clickCount }} />
    </div>
  );
};

storiesOf("General Purpose/Card", module).add("Basic", () => <TestHarness />);
