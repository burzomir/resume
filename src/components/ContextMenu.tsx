import * as React from "react";

export type ContextMenuProps<E extends HTMLElement> = React.PropsWithChildren<{
  api: ContextMenuAPI<E>;
}>;

export type ContextMenuAPI<E extends HTMLElement> = {
  isOpened: boolean;
  ref: React.Ref<E>;
};

export function ContextMenu<E extends HTMLElement>({
  api,
  children,
}: ContextMenuProps<E>) {
  const className = `
    context-menu 
    ${api.isOpened ? "context-menu--open" : ""}
    `;
  return <div className={className}>{children}</div>;
}

export function useContextMenu<E extends HTMLElement>(): ContextMenuAPI<E> {
  const [isOpened, setIsOpened] = React.useState(false);

  const open = React.useCallback(() => {
    setIsOpened(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpened(false);
  }, []);

  const ref = React.useRef<HTMLElement | null>();

  const setRef = (el: HTMLElement | null) => {
    if (ref.current) {
      ref.current.removeEventListener("mouseenter", open);
      ref.current.removeEventListener("mouseleave", close);
    }
    ref.current = el;
    if (ref.current) {
      ref.current.addEventListener("mouseenter", open);
      ref.current.addEventListener("mouseleave", close);
      ref.current.style.position = "relative";
    }
  };

  return { isOpened, ref: setRef };
}
