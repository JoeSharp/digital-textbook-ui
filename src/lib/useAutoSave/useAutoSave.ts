import React from "react";
import useInterval from "../useInterval";
import useErrorReporting from "../useErrorReporting";
import useObjectReducer from "../useObjectReducer";

interface Props<T> {
  defaultValue: T;
  saveData: (current: T) => Promise<T>;
  getInitialValue: () => Promise<T>;
  delay?: number;
  enabled?: boolean;
}

interface UseAutoSave<T> {
  localData: T;
  savedData?: T;
  localSave: (partial: Partial<T>) => any;
  isDirty: boolean;
  isSaving: boolean;
}

const useAutoSave = <T extends {}>({
  defaultValue,
  getInitialValue,
  saveData,
  delay = 3000,
  enabled = true,
}: Props<T>): UseAutoSave<T> => {
  const { reportError } = useErrorReporting();
  const [savedData, setSavedData] = React.useState<T>();
  const { value: localData, onChange } = useObjectReducer(defaultValue);
  const [isDirty, setIsDirty] = React.useState<boolean>(false);
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const localSave = React.useCallback(
    (data: Partial<T>) => {
      onChange(data);
      setIsDirty(true);
    },
    [onChange]
  );

  const replaceSavedData = React.useCallback(
    (data: T) => {
      onChange(data);
      setSavedData(data);
      setIsDirty(false);
      setIsSaving(false);
    },
    [onChange, setSavedData, setIsSaving, setIsDirty]
  );

  const _getInitialValue = React.useCallback(() => {
    async function f() {
      try {
        const w: T = await getInitialValue();
        replaceSavedData(w);
      } catch (err) {
        reportError(err);
      }
    }

    f();
  }, [getInitialValue, replaceSavedData, reportError]);

  React.useEffect(_getInitialValue, [_getInitialValue]);

  useInterval({
    callback: React.useCallback(async () => {
      try {
        setIsSaving(true);
        const saved = await saveData(localData);
        setSavedData(saved);
        setIsDirty(false);
        setIsSaving(false);
      } catch (err) {
        reportError(err);
      }
    }, [localData, setSavedData, reportError, saveData]),
    delay: enabled && isDirty ? delay : null,
  });

  return {
    isSaving,
    isDirty,
    localData,
    savedData,
    localSave,
  };
};

export default useAutoSave;
