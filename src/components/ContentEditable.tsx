import { useEffect, useRef } from "react";

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
  const ref = useRef<E | null>();

  const setRef = (el: E | null) => {
    if (ref.current) {
      ref.current.contentEditable = 'false';
    }
    if (el) {
      el.onblur = (e) => {
        if (e.target instanceof HTMLElement) {
          onChange(e.target.innerText);
        }
      };
      el.contentEditable = "true";
    }
    ref.current = el;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = value;
    }
  }, [value]);

  useEffect(() => {
    if (ref.current) {
      ref.current.contentEditable = readonly ? "false" : "true";
    }
  }, [readonly]);

  return readonly ? undefined : setRef;
}
