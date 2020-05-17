import { BaseProps } from "./Section";
import { UseObjectReducer } from "../../../../lib/useObjectReducer/types";

export const createTestBaseProps = <T extends {}>(
  studentResponseControlProps: UseObjectReducer<T>
): BaseProps<T> => {
  return {
    onNext: () => {},
    onPrevious: () => {},
    canGoPrevious: false,
    canGoNext: false,
    studentResponseControlProps,
  };
};
