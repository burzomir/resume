import downloadFile from "downloadjs";
import * as JSONUtils from "../utils/JSON";
import * as O from "../utils/object";
import { defaultPicture, Picture } from "./Picture";
import { defaultTimeline, Timeline } from "./Timeline/Timeline";
import { Sidebar, defaultSidebar } from "./Sidebar/Sidebar";
export type Data = {
  version: number;
  avatar: Picture;
  name: string;
  intro: string;
  timeline: Timeline;
  sidebar: Sidebar;
};

export const defaultData: Data = {
  version: 1,
  avatar: defaultPicture,
  name: "Your Name",
  intro: "Describe yourself here",
  timeline: defaultTimeline,
  sidebar: defaultSidebar,
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

export function setSidebar(sidebar: Sidebar, data: Data): Data {
  return O.set("sidebar", sidebar, data);
}

export function download(data: Data) {
  downloadFile(JSON.stringify(data), "resume.json", "application/json");
}

export function upload(): Promise<Data> {
  return JSONUtils.upload();
}
