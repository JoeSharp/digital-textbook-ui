import React from "react";
import useInterval from "../useInterval";

interface Props<T> {
  initialValue: T;
  saveData: (current: T) => Promise<any>;
  delay?: number;
  enabled?: boolean;
}

interface UseAutoSave<T> {
  localData: T;
  savedData?: T;
  setData: (updated: T) => any;
  isDirty: boolean;
  isSaving: boolean;
  saveError?: string;
}

const useAutoSave = <T extends {}>({
  initialValue,
  saveData,
  delay = 3000,
  enabled = true,
}: Props<T>): UseAutoSave<T> => {
  const [saveError, setSaveError] = React.useState<string>();
  const [savedData, setSavedData] = React.useState<T>();
  const [localData, setLocalData] = React.useState<T>(initialValue);
  const [isDirty, setIsDirty] = React.useState<boolean>(false);
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const setData = React.useCallback(
    (data: T) => {
      setLocalData(data);
      setIsDirty(true);
    },
    [setLocalData]
  );

  useInterval({
    callback: React.useCallback(async () => {
      try {
        setIsSaving(true);
        const saved = await saveData(localData);
        setSavedData(saved);
        setIsDirty(false);
        setIsSaving(false);
        setSaveError(undefined);
      } catch (err) {
        setSaveError(err);
      }
    }, [localData, setSavedData, setSaveError, saveData]),
    delay: enabled && isDirty ? delay : null,
  });

  return {
    saveError,
    isSaving,
    isDirty,
    localData,
    savedData,
    setData,
  };
};

export default useAutoSave;
