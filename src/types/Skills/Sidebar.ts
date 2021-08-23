import { defaultSection, Section } from "./Section";
import * as A from "../../utils/array";
import * as O from "../../utils/object";

export type Sidebar = {
  sections: Section[];
};

export const defaultSidebar: Sidebar = {
  sections: [defaultSection],
};

export function addSection(sidebar: Sidebar): Sidebar {
  const sections = A.add(defaultSection, sidebar.sections);
  return O.set("sections", sections, sidebar);
}

export function updateSection(
  index: number,
  section: Section,
  sidebar: Sidebar
): Sidebar {
  const sections = A.update(index, section, sidebar.sections);
  return O.set("sections", sections, sidebar);
}

export function removeSection(index: number, sidebar: Sidebar): Sidebar {
  const sections = A.remove(index, sidebar.sections);
  return O.set("sections", sections, sidebar);
}
