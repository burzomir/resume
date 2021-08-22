import { defaultEntry, Entry } from "./Entry";

export type Section = {
  name: string;
  entries: Entry[];
};

export const defaultSection: Section = {
  name: "Section",
  entries: [defaultEntry, defaultEntry],
};
