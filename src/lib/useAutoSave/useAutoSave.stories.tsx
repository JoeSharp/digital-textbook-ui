import React from "react";
import { storiesOf } from "@storybook/react";
import useAutoSave from "./useAutoSave";
import JsonDebug from "../JsonDebug";
import useToggle from "../useToggle";

interface SaveData {
  firstName: string;
  surname: string;
}

const defaultValue: SaveData = {
  firstName: "Joe",
  surname: "Sharp",
};

const TestHarness: React.FunctionComponent = () => {
  const { toggle: toggleEnabled, value: enabled } = useToggle(true);
  const { toggle: toggleSucceed, value: succeed } = useToggle(true);

  const saveData = React.useCallback(
    (data) => {
      const promise = new Promise<SaveData>((resolve, reject) => {
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

  const getInitialValue = React.useCallback(
    () => new Promise<SaveData>((res) => res(defaultValue)),
    []
  );

  const { isDirty, isSaving, savedData, localData, localSave } = useAutoSave({
    defaultValue,
    getInitialValue,
    saveData,
    enabled,
  });

  const onFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => localSave({ firstName: value }),
    [localSave]
  );
  const onSurnameChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    ({ target: { value } }) => localSave({ surname: value }),
    [localSave]
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
        <label>First Name</label>
        <input
          className="form-control"
          type="text"
          value={localData.firstName}
          onChange={onFirstNameChange}
        />
      </div>
      <div className="form-group">
        <label>Surnam</label>
        <input
          className="form-control"
          type="text"
          value={localData.surname}
          onChange={onSurnameChange}
        />
      </div>
      <JsonDebug value={{ isDirty, isSaving, localData, savedData }} />
    </div>
  );
};

storiesOf("lib/useAutoSave", module).add("basic", () => <TestHarness />);
