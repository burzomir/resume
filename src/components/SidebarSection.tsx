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
import Rating from "./Rating";
import { Text } from "./Text";
import { ContextMenu, useContextMenu } from "./ContextMenu";
import { IconButton } from "./IconButton";
import * as Icon from "react-feather";
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

  const contextMenuApi = useContextMenu<HTMLDivElement>();

  return (
    <div className="skill-section mb-3">
      <div className="skill-section__header" ref={contextMenuApi.ref}>
        <ContextMenu api={contextMenuApi}>
          <IconButton
            className="danger"
            title="Remove section"
            onClick={onRemove}
            size={18}
            Icon={Icon.X}
          />
          <IconButton
            className="primary"
            title="Add rating"
            onClick={() => onChange(addRatingItem(section))}
            size={18}
            Icon={Icon.Circle}
          />
          <IconButton
            className="primary"
            title="Add text"
            onClick={() => onChange(addTextItem(section))}
            size={18}
            Icon={Icon.Type}
          />
        </ContextMenu>
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
    </div>
  );
}

export type AddSidebarSectionProps = {
  onClick: () => void;
};

export function AddSidebarSection({ onClick }: AddSidebarSectionProps) {
  return (
    <div className="skill-section skill-section__add mb-3" onClick={onClick}>
      <div className="skill-section__header">
        <h2 className="mb-1">Add new section</h2>
      </div>
    </div>
  );
}
