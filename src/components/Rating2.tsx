import * as React from "react";
import { createRange } from "../utils/array";
import * as R from "../types/Sidebar/Rating";
import Icon from "./Icon";

interface RatingProps {
  rating: R.Rating;
  onChange: (rating: R.Rating) => void;
}

export default function Rating({ rating, onChange }: RatingProps) {
  return (
    <div className="skill-rating">
      <span className="skill-rating__name">{rating.name}</span>
      <div className="d-f">
        <div className="rating">
          <span className="rating__item--remove">
            <Icon icon="minus" />
          </span>
          {createRange(0, rating.level).map((n) => (
            <span className="rating__item" key={n}>
              <Icon icon="circle-fill" />
            </span>
          ))}
          {createRange(rating.level, rating.scale).map((n) => (
            <span className="rating__item" key={n}>
              <Icon icon="circle" />
            </span>
          ))}
          <span className="rating__item--add">
            <Icon icon="plus" />
          </span>
        </div>
        <i className="ml-1">{rating.label}</i>
      </div>
    </div>
  );
}
