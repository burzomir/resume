import * as FileUtils from "./file";

export async function upload(): Promise<any> {
  const file = await FileUtils.upload();
  const text = await file.text();
  return JSON.parse(text);
}
