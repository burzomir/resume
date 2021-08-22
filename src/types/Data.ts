import downloadFile from "downloadjs";
import * as JSONUtils from "../utils/JSON";
import { defaultPicture, Picture } from "./Picture";
import { defaultTimeline, Timeline } from "./Timeline/Timeline";

export type Data = {
  version: number;
  avatar: Picture;
  name: string;
  intro: string;
  timeline: Timeline;
};

export const defaultData: Data = {
  version: 1,
  avatar: defaultPicture,
  name: "Your Name",
  intro: "Describe yourself here",
  timeline: defaultTimeline,
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

export function setIntro(intro: string, data: Data): Data {
  const newData = { ...data };
  newData["intro"] = intro;
  return newData;
}

export function setTimeline(timeline: Timeline, data: Data): Data {
  const newData = { ...data };
  newData.timeline = timeline;
  return newData;
}

export function download(data: Data) {
  downloadFile(JSON.stringify(data), "resume.json", "application/json");
}

export function upload(): Promise<Data> {
  return JSONUtils.upload();
}
