import React from "react";
import { UseListReducer } from "./types";

/**
 * This file exports a custom hook that can be used to manage a list
 * with a reducer. It handles a few simple use cases for reducer based lists
 * that were common to a number of components.
 */

interface ReceivedAction<T> {
  type: "itemsReceived";
  items: T[];
}
interface AddAction<T> {
  type: "itemAdded";
  item: T;
}
interface RemovedAction {
  type: "itemRemoved";
  itemKey: string;
}
interface UpdatedAtIndexAction<T> {
  type: "itemUpdatedAtIndex";
  index: number;
  newValue: T;
}
interface RemovedByIndexAction {
  type: "itemRemovedByIndex";
  index: number;
}

export const createListReducer = <T extends {}>(
  getKey: (item: T) => string
) => {
  return (
    state: T[],
    action:
      | ReceivedAction<T>
      | AddAction<T>
      | RemovedAction
      | UpdatedAtIndexAction<T>
      | RemovedByIndexAction
  ): T[] => {
    switch (action.type) {
      case "itemsReceived":
        return action.items;
      case "itemAdded":
        return state
          .filter((d) => getKey(d) !== getKey(action.item)) // remove any existing item with same key
          .concat([action.item]);
      case "itemRemoved":
        return state.filter((u) => getKey(u) !== action.itemKey);
      case "itemUpdatedAtIndex":
        return state.map((u, i) => (i === action.index ? action.newValue : u));
      case "itemRemovedByIndex":
        return state.filter((u, i) => i !== action.index);
      default:
        return state;
    }
  };
};

const useListReducer = <T extends {}>(
  getKey: (item: T) => string,
  initialItems: T[] = []
): UseListReducer<T> => {
  const [items, dispatch] = React.useReducer(
    createListReducer<T>(getKey),
    initialItems
  );

  return {
    items,
    receiveItems: React.useCallback(
      (items: T[]) =>
        dispatch({
          type: "itemsReceived",
          items,
        }),
      [dispatch]
    ),
    addItem: React.useCallback(
      (item: T) =>
        dispatch({
          type: "itemAdded",
          item,
        }),
      [dispatch]
    ),
    removeItem: React.useCallback(
      (itemKey: string) =>
        dispatch({
          type: "itemRemoved",
          itemKey,
        }),
      [dispatch]
    ),
    updateItemAtIndex: React.useCallback(
      (index: number, newValue: T) =>
        dispatch({ type: "itemUpdatedAtIndex", index, newValue }),
      [dispatch]
    ),
    removeItemAtIndex: React.useCallback(
      (index: number) =>
        dispatch({
          type: "itemRemovedByIndex",
          index,
        }),
      [dispatch]
    ),
  };
};

export default useListReducer;
