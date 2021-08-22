import downloadFile from "downloadjs";

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
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.addEventListener("change", async (e) => {
      if (e.target instanceof HTMLInputElement) {
        const [file] = e.target.files;
        const rawData = await file.text();
        const parsedData = JSON.parse(rawData);
        resolve(parsedData);
      }
    });
    input.click();
  });
}
