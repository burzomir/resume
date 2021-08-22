import * as React from "react";
import * as ReactDOM from "react-dom";
import { AvatarEditor } from "../components/AvatarEditor";
import Page from "../components/Page";
import * as Data from "../types/Data";
import { Picture } from "../types/Picture";

function Editor() {
  const [data, setData] = React.useState(Data.defaultData);

  const upload = async () => {
    const res = await Data.upload();
    setData(res);
  };

  const download = () => {
    Data.download(data);
  };

  const setPicture = (pic: Picture) => {
    const newData = Data.setAvatar(pic, data);
    setData(newData);
  };

  return (
    <>
      <div>
        <button onClick={upload}>Upload</button>
        <button onClick={download}>Download</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div className="app">
        <Page format="a4" className="d-f">
          <div className="d-f p-2">
            <div className="w-30 pr-2">
              <div className="text-center mb-2">
                <AvatarEditor
                  picture={data.avatar}
                  onPictureChange={setPicture}
                  className="w-80"
                />
                <h1>User Name</h1>
              </div>
            </div>
            <div className="w-70 d-f"></div>
          </div>
        </Page>
      </div>
    </>
  );
}

export const run = () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);
  ReactDOM.render(<Editor />, rootElement);
};
