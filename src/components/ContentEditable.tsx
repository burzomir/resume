import { useEffect, useRef } from "react";

export type ContentEditableProps = {
  value: string;
  onChange: (value: string) => void;
};

export function useContentEditable<E extends HTMLElement>({
  value,
  onChange,
}: ContentEditableProps) {
  const ref = useRef<E>();

  const setRef = (el: E) => {
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

  return setRef;
}
