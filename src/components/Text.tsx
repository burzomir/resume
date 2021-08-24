import * as React from "react";
import * as T from "../types/Sidebar/Text";
import { useContentEditable } from "./ContentEditable";
import * as O from "../utils/object";
export type TextProps = {
  text: T.Text;
  onChange: (text: T.Text) => void;
};

export function Text({ text, onChange }: TextProps) {
  const ref = useContentEditable({
    value: text.text,
    onChange: (newText) => onChange(O.set("text", newText, text)),
  });
  return <div className="text" ref={ref} />;
}
