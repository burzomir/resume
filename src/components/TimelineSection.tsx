import * as React from "react";
import {
  addEntry,
  removeEntry,
  Section,
  setName,
  updateEntry,
} from "../types/Timeline/Section";
import { useContentEditable } from "./ContentEditable";
import TimelineEntry, { AddTimelineEntry } from "./TimelineEntry";

interface TimelineSectionProps {
  section: Section;
  onChange: (section: Section) => void;
  onRemove: () => void;
  readonly: boolean;
}

export default function TimelineSection({
  section,
  onChange,
  onRemove,
  readonly,
}: TimelineSectionProps) {
  const nameRef = useContentEditable({
    value: section.name,
    onChange: (newName) => onChange(setName(newName, section)),
    readonly,
  });

  return (
    <div className="timeline-section">
      <div className="timeline-section__header">
        {!readonly && (
          <div className="timeline-section--remove" onClick={onRemove}>
            Remove section
          </div>
        )}
        <h2 ref={nameRef} />
      </div>
      {section.entries.map((entry, index) => (
        <TimelineEntry
          key={index}
          entry={entry}
          onChange={(newEntry) => {
            onChange(updateEntry(index, newEntry, section));
          }}
          onRemove={() => {
            onChange(removeEntry(index, section));
          }}
          readonly={readonly}
        />
      ))}
      {!readonly && (
        <AddTimelineEntry
          onClick={() => {
            const newSection = addEntry(section);
            onChange(newSection);
          }}
        />
      )}
    </div>
  );
}

type AddTimelineSectionProps = {
  onClick: () => void;
};

export function AddTimelineSection(props: AddTimelineSectionProps) {
  return (
    <div className="timeline-section timeline-section--add" {...props}>
      <h2>Add new section</h2>
    </div>
  );
}
