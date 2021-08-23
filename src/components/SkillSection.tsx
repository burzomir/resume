import * as React from "react";
import { useContentEditable } from "./ContentEditable";

interface SkillSectionProps {
  name: string;
  onChange: (name: string) => void;
}

export default function SkillSection(
  props: React.PropsWithChildren<SkillSectionProps>
) {
  const { name, children, onChange } = props;

  const ref = useContentEditable({
    value: name,
    onChange,
  });

  return (
    <div className="skill-section mb-3">
      <h2 className="mb-1" ref={ref} />
      {children}
    </div>
  );
}
