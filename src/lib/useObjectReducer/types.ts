export interface ObjWithStringKey<T> {
  [s: string]: T;
}

export interface UseObjectReducer<T extends {}> {
  items: ObjWithStringKey<T>;
  itemsInList: T[];
  receiveKeyedItems: (items: ObjWithStringKey<T>) => void;
  receiveListOfItems: (items: T[]) => void;
  addItem: (item: T) => void;
  removeItem: (itemKey: string) => void;
}
