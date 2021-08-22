import * as React from "react";

export type NameProps = {
  name: string;
  onChange: (name: string) => void;
};

export function Name({ name, onChange }: NameProps) {
  const ref = React.useRef<HTMLHeadingElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerText = name;
    }
  }, [name]);
  return (
    <h1
      contentEditable="true"
      onBlur={(e) => onChange(e.target.innerText)}
      ref={ref}
    />
  );
}
