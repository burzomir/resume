export const findBy =
  <T>(propName: keyof T) =>
  <V extends T>(array: V[]) =>
  <U extends keyof T>(value: V[U]) => {
    return array.find((element) => element[propName] === value);
  };

interface WithId {
  id: number;
}
export const findById = findBy<WithId>("id");

export const createRange = (start: number, end: number): number[] => {
  if (start < end) {
    return [start, ...createRange(start + 1, end)];
  } else {
    return [];
  }
};

export function add<Item>(item: Item, list: Item[]): Item[] {
  return [...list, item];
}

export function update<Item>(index: number, item: Item, list: Item[]): Item[] {
  return list.map((currentItem, currentIndex) =>
    currentIndex === index ? item : currentItem
  );
}

export function remove<Item>(index: number, list: Item[]): Item[] {
  return list.reduce(
    (items, currentItem, currentIndex) =>
      currentIndex === index ? items : [...items, currentItem],
    [] as Item[]
  );
}
