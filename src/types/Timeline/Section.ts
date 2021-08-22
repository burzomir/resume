import { defaultEntry, Entry } from "./Entry";

export type Section = {
  name: string;
  entries: Entry[];
};

export const defaultSection: Section = addEntry(
  addEntry({
    name: "Section",
    entries: [],
  })
);

export function addEntry(section: Section): Section {
  const newSection = { ...section };
  newSection.entries = [...section.entries, defaultEntry];
  return newSection;
}

export function updateEntry(
  index: number,
  entry: Entry,
  section: Section
): Section {
  const newSection = { ...section };
  newSection.entries = section.entries.map((e, i) => (i === index ? entry : e));
  return newSection;
}

export function removeEntry(index: number, section: Section): Section {
  const newSection = { ...section };
  newSection.entries = section.entries.reduce(
    (es, e, i) => (i === index ? [...es, e] : es),
    []
  );
  return newSection;
}
