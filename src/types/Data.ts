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
  return O.set("avatar", picture, data);
}

export function setName(name: string, data: Data): Data {
  return O.set("name", name, data);
}

export function setIntro(intro: string, data: Data): Data {
  return O.set("intro", intro, data);
}

export function setTimeline(timeline: Timeline, data: Data): Data {
  return O.set("timeline", timeline, data);
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
