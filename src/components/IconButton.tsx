import * as React from "react";

export function IconButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={props.className + " icon-button"} />;
}
