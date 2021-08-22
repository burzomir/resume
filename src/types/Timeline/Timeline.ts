import { defaultSection, Section } from "./Section";

export type Timeline = Section[];

export function addSection(timeline: Timeline): Timeline {
  return [...timeline, defaultSection];
}

export const defaultTimeline: Timeline = addSection(addSection([]));

export function updateSection(
  index: number,
  section: Section,
  timeline: Timeline
): Timeline {
  return timeline.map((s, i) => (i === index ? section : s));
}

export function removeSection(index: number, timeline: Timeline): Timeline {
  return timeline.reduce((ss, s, i) => (i === index ? [...ss, s] : ss), []);
}
