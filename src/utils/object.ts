export function set<O extends {}>(key: keyof O, value: O[typeof key], o: O): O {
  const newObject = { ...o };
  newObject[key] = value;
  return newObject;
}
