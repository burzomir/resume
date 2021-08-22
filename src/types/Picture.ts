export type Picture = {
  data: string;
};

export const defaultPicture: Picture = {
  data: "",
};

export function fromFile(file: File): Promise<Picture> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      if (typeof data === "string") {
        resolve({ data });
      } else {
        reject("Data is not a string");
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
