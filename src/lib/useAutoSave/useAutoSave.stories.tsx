import React from "react";
import { storiesOf } from "@storybook/react";
import useAutoSave from "./useAutoSave";
import JsonDebug from "../JsonDebug";
import useToggle from "../useToggle";

interface SaveData {
  name: string;
}

const initialValue: SaveData = {
  name: "Joe Sharp",
};

const TestHarness: React.FunctionComponent = () => {
  const { toggle: toggleEnabled, value: enabled } = useToggle(true);
  const { toggle: toggleSucceed, value: succeed } = useToggle(true);

  const saveData = React.useCallback(
    (data) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
          if (succeed) {
            resolve(data);
          } else {
            reject("Error as requested");
          }
        }, 2000);
      });

      return promise;
    },
    [succeed]
  );

  const {
    isDirty,
    isSaving,
    savedData,
    localData,
    setData,
    saveError,
  } = useAutoSave({
    initialValue,
    saveData,
    enabled,
  });

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => setData({ name: value }),
    [setData]
  );

  return (
    <div>
      <div className="form-group">
        <label>Enabled</label>
        <input type="checkbox" checked={enabled} onChange={toggleEnabled} />
      </div>
      <div className="form-group">
        <label>Succeed Save</label>
        <input type="checkbox" checked={succeed} onChange={toggleSucceed} />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={localData.name}
          onChange={onNameChange}
        />
      </div>
      <JsonDebug
        value={{ isDirty, isSaving, saveError, localData, savedData }}
      />
    </div>
  );
};

storiesOf("lib/useAutoSave", module).add("basic", () => <TestHarness />);
