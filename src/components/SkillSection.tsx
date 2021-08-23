import * as React from "react";
import { useContentEditable } from "./ContentEditable";

interface SkillSectionProps {
  name: string;
  onChange: (name: string) => void;
  onRemove: () => void;
}

export default function SkillSection(
  props: React.PropsWithChildren<SkillSectionProps>
) {
  const { name, children, onChange, onRemove } = props;

  const ref = useContentEditable({
    value: name,
    onChange,
  });

  return (
    <div className="skill-section mb-3">
      <div className="skill-section__header">
        <div className="skill-section__remove" onClick={onRemove}>
          Remove section
        </div>
        <h2 className="mb-1" ref={ref} />
      </div>
      {children}
    </div>
  );
}
