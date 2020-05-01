import { BaseProps } from "./Section";
import { UseObjectReducer } from "../../../../lib/useObjectReducer/types";

export const createTestBaseProps = <T extends {}>(
  studentResponse: UseObjectReducer<T>
): BaseProps<T> => {
  return {
    onNext: () => {},
    onPrevious: () => {},
    canGoPrevious: false,
    canGoNext: false,
    studentResponse,
  };
};
