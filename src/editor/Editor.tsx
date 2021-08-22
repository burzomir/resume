import * as React from "react";
import * as ReactDOM from "react-dom";
import { AvatarEditor } from "../components/AvatarEditor";
import { Name } from "../components/Name";
import Page from "../components/Page";
import Timeline from "../components/Timeline";
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

  const setName = (name: string) => {
    const newData = Data.setName(name, data);
    setData(newData);
  };

  return (
    <>
      <div>
        <button onClick={upload}>Upload</button>
        <button onClick={download}>Download</button>
      </div>
      <div className="app">
        <Page format="a4" className="d-f">
          <div className="d-f p-2 w-100">
            <div className="w-30 pr-2">
              <div className="text-center mb-2">
                <AvatarEditor
                  picture={data.avatar}
                  onPictureChange={setPicture}
                  className="w-80"
                />
                <Name name={data.name} onChange={setName} />
              </div>
            </div>
            <div className="w-70 d-f">
              <Timeline></Timeline>
            </div>
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
