import downloadFile from "downloadjs";
import * as JSONUtils from "../utils/JSON";

export type Data = {
  version: number;
};

export const defaultData: Data = {
  version: 1,
};

export function download(data: Data) {
  downloadFile(JSON.stringify(data), "resume.json", "application/json");
}

export function upload(): Promise<Data> {
  return JSONUtils.upload();
}
