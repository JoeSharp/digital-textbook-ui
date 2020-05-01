import React from "react";
import { storiesOf } from "@storybook/react";

import useObjectReducer from "./useObjectReducer";
import JsonDebug from "../JsonDebug";

interface TestObj {
  name: string;
  slogan: string;
}

const defaultTestObj: TestObj = {
  name: "Bob",
  slogan: "Lets build it",
};

const TestHarness: React.FunctionComponent = () => {
  const { value, onChange } = useObjectReducer<TestObj>(defaultTestObj);

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => onChange({ name: value }),
    [onChange]
  );
  const onSloganChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => onChange({ slogan: value }),
    [onChange]
  );
  const onReplace = React.useCallback(() => onChange(defaultTestObj), [
    onChange,
  ]);

  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          value={value.name}
          onChange={onNameChange}
        />
      </div>
      <div className="form-group">
        <label>Slogan</label>
        <input
          className="form-control"
          value={value.slogan}
          onChange={onSloganChange}
        />
      </div>
      <button onClick={onReplace}>Reset Value</button>
      <div>
        <small>(test replace)</small>
      </div>
      <JsonDebug value={value} />
    </div>
  );
};

storiesOf("lib/useObjectReducer", module).add("basic", () => <TestHarness />);
