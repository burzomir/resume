import * as O from "../../utils/object";

export type Text = {
  text: string;
};

export const defaultText = {
  text: "Some text",
};

export function setText(text: string, t: Text): Text {
  return O.set("text", text, t);
}
