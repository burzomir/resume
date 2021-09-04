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
  return O.set("name", name, entry);
}

export function setCompanyName(name: string, entry: Entry): Entry {
  return O.set("companyName", name, entry);
}

export function setStarted(date: Date, entry: Entry): Entry {
  return O.set("started", date, entry);
}

export function setEnded(date: Date | null, entry: Entry): Entry {
  return O.set("ended", date, entry);
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
