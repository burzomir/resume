import * as React from "react";
import * as Icon from "react-feather";

export function IconButton(
  props: React.HTMLAttributes<HTMLButtonElement> & {
    size: number;
    Icon: Icon.Icon;
  }
) {
  const size = props.size + "px";
  return (
    <button
      {...props}
      className={props.className + " icon-button"}
      style={{ width: size, height: size }}
    >
      <props.Icon size={size} />
    </button>
  );
}
