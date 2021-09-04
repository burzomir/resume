export function upload(): Promise<File> {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.addEventListener("change", async (e) => {
      if (e.target instanceof HTMLInputElement && e.target.files) {
        const [file] = e.target.files;
        resolve(file);
      }
    });
    input.click();
  });
}
