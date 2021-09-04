import { defaultSection, Section } from "./Section";
import * as A from "../../utils/array";

export type Timeline = Section[];

export function addSection(timeline: Timeline): Timeline {
  return A.add(defaultSection, timeline);
}

export const defaultTimeline: Timeline = [];

export function updateSection(
  index: number,
  section: Section,
  timeline: Timeline
): Timeline {
  return A.update(index, section, timeline);
}

export function removeSection(index: number, timeline: Timeline): Timeline {
  return A.remove(index, timeline);
}
