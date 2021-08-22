import * as React from "react";
import { Section, setName, updateEntry } from "../types/Timeline/Section";
import { useContentEditable } from "./ContentEditable";
import TimelineEntry from "./TimelineEntry";

interface TimelineSectionProps {
  section: Section;
  onChange: (section: Section) => void;
}

export default function TimelineSection({
  section,
  onChange,
}: TimelineSectionProps) {
  const nameRef = useContentEditable({
    value: section.name,
    onChange: (newName) => onChange(setName(newName, section)),
  });

  return (
    <div className="timeline-section">
      <h2 ref={nameRef} />
      {section.entries.map((entry, index) => (
        <TimelineEntry
          key={index}
          entry={entry}
          onChange={(newEntry) => {
            onChange(updateEntry(index, newEntry, section));
          }}
        />
      ))}
    </div>
  );
}
