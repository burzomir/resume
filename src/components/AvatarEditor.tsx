import * as React from "react";
import Avatar from "./Avatar";
import * as FileUtils from "../utils/file";
import * as Picture from "../types/Picture";

import placeholder from "../../assets/placeholder.png";

export type AvatarEditorProps = {
  picture: Picture.Picture;
  onPictureChange: (picture: Picture.Picture) => void;
};

export function AvatarEditor({
  picture,
  onPictureChange,
  ...props
}: AvatarEditorProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  const upload = async () => {
    const file = await FileUtils.upload();
    const picture = await Picture.fromFile(file);
    onPictureChange(picture);
  };
  return (
    <Avatar {...props} src={picture.data || placeholder} onClick={upload} />
  );
}
