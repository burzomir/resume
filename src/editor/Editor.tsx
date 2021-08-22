import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Data from "../types/Data";

function Editor() {
  const [data, setData] = React.useState(Data.defaultData);

  const upload = async () => {
    const res = await Data.upload();
    setData(res);
  };

  const download = () => {
    Data.download(data);
  };

  return (
    <div>
      <button onClick={upload}>Upload</button>
      <button onClick={download}>Download</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export const run = () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  ReactDOM.render(<Editor />, rootElement);
};
