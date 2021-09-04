import * as React from "react";
import { createRange } from "../utils/array";
import * as R from "../types/Sidebar/Rating";
import Icon from "./Icon";
import { useContentEditable } from "./ContentEditable";

interface RatingProps {
  rating: R.Rating;
  onChange: (rating: R.Rating) => void;
  readonly: boolean;
}

export default function Rating({ rating, onChange, readonly }: RatingProps) {
  const nameRef = useContentEditable({
    value: rating.name,
    onChange: (newName) => {
      onChange(R.setName(newName, rating));
    },
    readonly,
  });

  const labelRef = useContentEditable({
    value: rating.label,
    onChange: (newName) => {
      onChange(R.setLabel(newName, rating));
    },
    readonly,
  });

  return (
    <div className="skill-rating">
      <span className="skill-rating__name" ref={nameRef} />
      <div className="d-f">
        <div className="rating">
          {!readonly && (
            <span
              className="rating__item--remove"
              onClick={() => {
                onChange(R.decreaseScale(rating));
              }}
            >
              <Icon icon="minus" />
            </span>
          )}
          {createRange(0, rating.level).map((n) => (
            <span
              className="rating__item"
              key={n}
              onClick={() => {
                !readonly && onChange(R.setLevel(n + 1, rating));
              }}
            >
              <Icon icon="circle-fill" />
            </span>
          ))}
          {createRange(rating.level, rating.scale).map((n) => (
            <span
              className="rating__item"
              key={n}
              onClick={() => {
                !readonly && onChange(R.setLevel(n + 1, rating));
              }}
            >
              <Icon icon="circle" />
            </span>
          ))}
          {!readonly && (
            <span
              className="rating__item--add"
              onClick={() => {
                onChange(R.increaseScale(rating));
              }}
            >
              <Icon icon="plus" />
            </span>
          )}
        </div>
        <i className="ml-1" ref={labelRef}></i>
      </div>
    </div>
  );
}
