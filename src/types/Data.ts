import downloadFile from "downloadjs";
import * as JSONUtils from "../utils/JSON";
import { defaultPicture, Picture } from "./Picture";

export type Data = {
  version: number;
  avatar: Picture;
};

export const defaultData: Data = {
  version: 1,
  avatar: defaultPicture,
};

export function setAvatar(picture: Picture, data: Data): Data {
  const newData = { ...data };
  newData["avatar"] = picture;
  return newData;
}

export function download(data: Data) {
  downloadFile(JSON.stringify(data), "resume.json", "application/json");
}

export function upload(): Promise<Data> {
  return JSONUtils.upload();
}
