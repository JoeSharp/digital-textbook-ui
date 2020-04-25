import React from "react";

interface UseCounter {
  value: number;
  change: (amount: number) => void;
  increment: () => void;
}

const reducer = (state: number, action: number) => (state += action);

const useCounter = (initialValue: number = 0): UseCounter => {
  const [value, change] = React.useReducer(reducer, initialValue);

  const increment = React.useCallback(() => change(1), [change]);

  return {
    value,
    change,
    increment,
  };
};

export default useCounter;
