import { defaultRating, Rating } from "./Rating";
import { defaultText, Text } from "./Text";
import * as O from "../../utils/object";
import * as A from "../../utils/array";

export type Section = {
  name: string;
  content: Item[];
};

type Item =
  | {
      type: "Rating";
      rating: Rating;
    }
  | {
      type: "Text";
      text: Text;
    };

export const defaultSection: Section = {
  name: "Section",
  content: [],
};

export function setName(name: string, section: Section): Section {
  const newSection = { ...section };
  newSection.name = name;
  return newSection;
}

export function addRatingItem(section: Section): Section {
  const rating: Item = {
    type: "Rating",
    rating: defaultRating,
  };
  return O.set("content", A.add(rating, section.content), section);
}

export function makeRatingItem(rating: Rating): Item {
  return {
    type: "Rating",
    rating,
  };
}

export function addTextItem(section: Section): Section {
  const text: Item = {
    type: "Text",
    text: defaultText,
  };
  return O.set("content", A.add(text, section.content), section);
}

export function makeTextItem(text: Text): Item {
  return {
    type: "Text",
    text,
  };
}

export function removeItem(index: number, section: Section): Section {
  return O.set("content", A.remove(index, section.content), section);
}

export function updateItem(
  index: number,
  item: Item,
  section: Section
): Section {
  return O.set("content", A.update(index, item, section.content), section);
}
