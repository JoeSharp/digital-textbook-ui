export interface UseListReducer<T extends {}> {
  items: T[];
  receiveItems: (items: T[]) => void;
  addItem: (item: T) => void;
  removeItem: (itemKey: string) => void;
  updateItemAtIndex: (index: number, newValue: T) => void;
  removeItemAtIndex: (index: number) => void;
}
