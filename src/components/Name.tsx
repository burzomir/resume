import * as React from "react";
import { useContentEditable } from "./ContentEditable";

export type NameProps = {
  name: string;
  onChange: (name: string) => void;
};

export function Name({ name, onChange }: NameProps) {
  const ref = useContentEditable<HTMLHeadingElement>({ value: name, onChange });
  return <h1 ref={ref} />;
}
