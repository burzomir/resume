import { defaultSection, Section } from "./Section";

export type Timeline = Section[];

export function addSection(timeline: Timeline): Timeline {
  return [...timeline, defaultSection];
}

export const defaultTimeline: Timeline = addSection(addSection([]));
