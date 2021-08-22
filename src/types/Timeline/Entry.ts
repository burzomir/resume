export type Entry = {
  name: string;
  companyName: string;
  started: Date;
  ended: Date | undefined;
};

export const defaultEntry: Entry = {
  name: "Entry",
  companyName: "Place",
  started: new Date(),
  ended: undefined,
};

export function setName(name: string, entry: Entry): Entry {
  const newEntry = { ...entry };
  newEntry.name = name;
  return newEntry;
}

export function setCompanyName(name: string, entry: Entry): Entry {
  const newEntry = { ...entry };
  newEntry.companyName = name;
  return newEntry;
}

export function setStarted(date: Date, entry: Entry): Entry {
  const newEntry = { ...entry };
  newEntry.started = date;
  return newEntry;
}

export function setEnded(date: Date | undefined, entry: Entry): Entry {
  const newEntry = { ...entry };
  newEntry.ended = date;
  return newEntry;
}
