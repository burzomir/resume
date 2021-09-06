import { useEffect, useRef, useState } from "react";

export type ContentEditableProps = {
  value: string;
  onChange: (value: string) => void;
  readonly: boolean;
};

export function useContentEditable<E extends HTMLElement>({
  value,
  onChange,
  readonly,
}: ContentEditableProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (element) {
      element.contentEditable = readonly ? "false" : "true";
    }
  }, [element, readonly]);

  useEffect(() => {
    if (element) {
      element.innerText = value;
    }
  }, [element, value]);

  useEffect(() => {
    if (element) {
      element.onblur = () => onChange(element.innerText);
    }
  }, [element, onChange]);

  return setElement;
}
