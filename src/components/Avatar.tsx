import * as React from "react";
import * as FileUtils from "../utils/file";
import * as Picture from "../types/Picture";

import placeholder from "../../assets/placeholder.png";

export type Avatar = {
  picture: Picture.Picture;
  onPictureChange: (picture: Picture.Picture) => void;
  readonly: boolean;
};

export function Avatar({
  picture,
  onPictureChange,
  className,
  readonly,
  ...props
}: Avatar & React.ImgHTMLAttributes<HTMLImageElement>) {
  const upload = async () => {
    const file = await FileUtils.upload();
    const picture = await Picture.fromFile(file);
    onPictureChange(picture);
  };
  return (
    <img
      {...props}
      src={picture.data || placeholder}
      onClick={readonly ? undefined : upload}
      className={`avatar ${className ? className : ""}`}
    />
  );
}
