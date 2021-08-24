export type Section = {
  name: string;
};

export const defaultSection: Section = {
  name: "Skills",
};

export function setName(name: string, section: Section): Section {
  const newSection = { ...section };
  newSection.name = name;
  return newSection;
}
