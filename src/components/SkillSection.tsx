import * as React from "react";
import {
  addRatingItem,
  addTextItem,
  makeRatingItem,
  makeTextItem,
  removeItem,
  Section,
  setName,
  updateItem,
} from "../types/Sidebar/Section";
import { useContentEditable } from "./ContentEditable";
import Rating from "./Rating2";
import { Text } from "./Text";
interface SkillSectionProps {
  section: Section;
  onChange: (section: Section) => void;
  onRemove: () => void;
}

export default function SkillSection(props: SkillSectionProps) {
  const { section, onChange, onRemove } = props;

  const ref = useContentEditable({
    value: section.name,
    onChange: (name) => onChange(setName(name, section)),
  });

  return (
    <div className="skill-section mb-3">
      <div className="skill-section__header">
        <div className="skill-section__remove" onClick={onRemove}>
          Remove section
        </div>
        <h2 className="mb-1" ref={ref} />
      </div>
      {section.content.map((item, index) => (
        <div key={index} className="skill-section__item">
          <div
            className="skill-section__remove-item"
            onClick={() => {
              onChange(removeItem(index, section));
            }}
          >
            Remove
          </div>
          {item.type === "Rating" && (
            <Rating
              rating={item.rating}
              onChange={(rating) => {
                onChange(updateItem(index, makeRatingItem(rating), section));
              }}
            />
          )}
          {item.type === "Text" && (
            <Text
              text={item.text}
              onChange={(newText) =>
                onChange(updateItem(index, makeTextItem(newText), section))
              }
            />
          )}
        </div>
      ))}
      <div className="skill-section__add-controls">
        <span
          className="skill-section__add-item"
          onClick={() => onChange(addRatingItem(section))}
        >
          Add rating
        </span>
        <span
          className="skill-section__add-item"
          onClick={() => onChange(addTextItem(section))}
        >
          Add text
        </span>
      </div>
    </div>
  );
}

export type AddSkillSectionProps = {
  onClick: () => void;
};

export function AddSkillSection({ onClick }: AddSkillSectionProps) {
  return (
    <div className="skill-section skill-section__add mb-3" onClick={onClick}>
      <div className="skill-section__header">
        <h2 className="mb-1">Add new section</h2>
      </div>
    </div>
  );
}
