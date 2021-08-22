export type Entry = {
  name: string;
  companyName: string;
  started: Date;
  ended?: Date;
};

export const defaultEntry: Entry = {
  name: "Entry",
  companyName: "Place",
  started: new Date(),
};
