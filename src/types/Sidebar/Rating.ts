import * as O from "../../utils/object";

export type Rating = {
  name: string;
  scale: number;
  level: number;
  label: string;
};

export const defaultRating: Rating = {
    label: 'Medium',
    level: 3,
    scale: 6,
    name: 'Skill name'
}

export function increaseScale(rating: Rating): Rating {
  return O.set("scale", rating.scale + 1, rating);
}

export function decreaseScale(rating: Rating): Rating {
  return O.set("scale", rating.scale === 1 ? 1 : rating.scale - 1, rating);
}

export function setName(name: string, rating: Rating): Rating {
  return O.set("name", name, rating);
}

export function setLevel(level: number, rating: Rating): Rating {
  return O.set("level", level % (rating.scale + 1), rating);
}

export function setLabel(label: string, rating: Rating): Rating {
  return O.set("label", label, rating);
}
