import { defaultText, Text } from "../Sidebar/Text";
import * as O from "../../utils/object";
import * as A from "../../utils/array";

export type Entry = {
  name: string;
  companyName: string;
  started: Date;
  ended: Date | null;
  content: Text[];
};

export const defaultEntry: Entry = {
  name: "Entry",
  companyName: "Place",
  started: new Date(),
  ended: null,
  content: [],
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

export function setEnded(date: Date | null, entry: Entry): Entry {
  const newEntry = { ...entry };
  newEntry.ended = date;
  return newEntry;
}

export function addText(entry: Entry): Entry {
  return O.set("content", A.add(defaultText, entry.content), entry);
}

export function updateText(index: number, text: Text, entry: Entry): Entry {
  return O.set("content", A.update(index, text, entry.content), entry);
}

export function removeText(index: number, entry: Entry): Entry {
  return O.set("content", A.remove(index, entry.content), entry);
}
