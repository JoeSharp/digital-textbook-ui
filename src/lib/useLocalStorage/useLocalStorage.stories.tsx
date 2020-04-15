import React from "react";

import { storiesOf } from "@storybook/react";
import useLocalStorage, { useStoreObjectFactory } from "./useLocalStorage";
import JsonDebug from "../JsonDebug";

interface TestStore1 {
  name: string;
}

const STORAGE_KEY_1 = "testWithSetValue";
const DEFAULT_VALUE_1 = {
  name: "someName",
};

const TestHarnessSetValue: React.FunctionComponent = () => {
  const { value, setValue, resetValue } = useLocalStorage<TestStore1>(
    STORAGE_KEY_1,
    DEFAULT_VALUE_1,
    useStoreObjectFactory()
  );

  const onName1Change: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => {
      setValue({ name: value });
    },
    [setValue]
  );

  return (
    <div>
      <p>Demonstrates simple use of setValue</p>
      <form>
        <div>
          <label>Value in Storage</label>
          <input value={value.name} onChange={onName1Change} />
        </div>
      </form>

      <div>
        <button onClick={resetValue}>Reset All Storage</button>
      </div>
      <JsonDebug value={{ STORAGE_KEY_1, value }} />
    </div>
  );
};

interface TestStore2 {
  names: string[];
}

const STORAGE_KEY_2 = "testWithReducer";
const DEFAULT_VALUE_2 = {
  names: ["lister", "rimmer", "cat", "kryten"],
};

const TestHarnessReducer: React.FunctionComponent = () => {
  const [newValue, setNewValue] = React.useState<string>("kochanski");
  const onNewValueChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => setNewValue(value),
    [setNewValue]
  );

  const { value, reduceValue, resetValue } = useLocalStorage<TestStore2>(
    STORAGE_KEY_2,
    DEFAULT_VALUE_2,
    useStoreObjectFactory()
  );

  const onAddValue = React.useCallback(
    (e) => {
      reduceValue((existing) => ({ names: [newValue, ...existing.names] }));
      e.preventDefault();
    },
    [newValue, reduceValue]
  );

  const onRemoveValue = React.useCallback(
    (e) => {
      reduceValue((existing) => ({
        names: existing.names.filter((e) => e !== newValue),
      }));
      e.preventDefault();
    },
    [newValue, reduceValue]
  );

  const resetStorage = React.useCallback(() => {
    resetValue();
  }, [resetValue]);

  return (
    <div>
      <p>
        Demonstrates the use of a reducer, where any new value is calculated
        with reference to the existing one.
      </p>
      <p>
        If a reducer is not used, and instead a function is memoized that gets
        recreated when the value changes, you end up with a recursive render. So
        for any local storage values that need to use the existing value to
        calculate the new value, use a reducer.
      </p>
      <form>
        <div>
          <label>Value for Storage</label>
          <input value={newValue} onChange={onNewValueChange} />
          <button onClick={onAddValue}>Add Value</button>
          <button onClick={onRemoveValue}>Remove Value</button>
        </div>
      </form>

      <div>
        <button onClick={resetStorage}>Reset All Storage</button>
      </div>
      <JsonDebug value={{ STORAGE_KEY_2, value }} />
    </div>
  );
};

storiesOf("lib/useLocalStorage", module)
  .add("setValue", () => <TestHarnessSetValue />)
  .add("reducer", () => <TestHarnessReducer />);
