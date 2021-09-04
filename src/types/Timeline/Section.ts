import { defaultEntry, Entry } from "./Entry";
import * as O from "../../utils/object";
import * as A from "../../utils/array";

export type Section = {
  name: string;
  entries: Entry[];
};

export const defaultSection: Section = {
  name: "Section",
  entries: [],
};

export function setName(name: string, section: Section): Section {
  return O.set("name", name, section);
}

export function addEntry(section: Section): Section {
  const entries = A.add(defaultEntry, section.entries);
  return O.set("entries", entries, section);
}

export function updateEntry(
  index: number,
  entry: Entry,
  section: Section
): Section {
  const entries = A.update(index, entry, section.entries);
  return O.set("entries", entries, section);
}

export function removeEntry(index: number, section: Section): Section {
  const entries = A.remove(index, section.entries);
  return O.set("entries", entries, section);
}
