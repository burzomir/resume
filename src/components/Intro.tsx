import * as React from "react";
import { useContentEditable } from "./ContentEditable";

export type IntroProps = {
  value: string;
  onChange: (text: string) => void;
  readonly: boolean;
};

export function Intro(props: IntroProps) {
  const ref = useContentEditable(props);
  return <p ref={ref}></p>;
}
