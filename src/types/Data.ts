import downloadFile from "downloadjs";
import * as JSONUtils from "../utils/JSON";
import { defaultPicture, Picture } from "./Picture";

export type Data = {
  version: number;
  avatar: Picture;
  name: string;
};

export const defaultData: Data = {
  version: 1,
  avatar: defaultPicture,
  name: "",
};

export function setAvatar(picture: Picture, data: Data): Data {
  const newData = { ...data };
  newData["avatar"] = picture;
  return newData;
}

export function setName(name: string, data: Data): Data {
  const newData = { ...data };
  newData["name"] = name;
  return newData;
}

export function download(data: Data) {
  downloadFile(JSON.stringify(data), "resume.json", "application/json");
}

export function upload(): Promise<Data> {
  return JSONUtils.upload();
}
