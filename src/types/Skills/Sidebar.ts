import { defaultSection, Section } from "./Section";

export type Sidebar = {
  sections: Section[];
};

export const defaultSidebar: Sidebar = {
  sections: [defaultSection],
};
