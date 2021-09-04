import * as React from "react";
import { useContentEditable } from "./ContentEditable";

export type NameProps = {
  name: string;
  onChange: (name: string) => void;
  readonly: boolean;
};

export function Name({ readonly, name, onChange }: NameProps) {
  const ref = useContentEditable<HTMLHeadingElement>({
    value: name,
    onChange,
    readonly,
  });
  return <h1 ref={ref} />;
}
