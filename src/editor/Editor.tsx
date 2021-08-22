import * as React from "react";
import * as ReactDOM from "react-dom";
import { AvatarEditor } from "../components/AvatarEditor";
import * as Data from "../types/Data";
import { defaultPicture } from "../types/Picture";

function Editor() {
  const [data, setData] = React.useState(Data.defaultData);
  const [picture, setPicture] = React.useState(defaultPicture);

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
      <AvatarEditor
        picture={picture}
        onPictureChange={setPicture}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
}

export const run = () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  ReactDOM.render(<Editor />, rootElement);
};
