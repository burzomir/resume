import * as React from "react";
import * as ReactDOM from "react-dom";
import { Avatar } from "./components/Avatar";
import { Intro } from "./components/Intro";
import { Name } from "./components/Name";
import Page from "./components/Page";
import Timeline from "./components/Timeline";
import TimelineSection, {
  AddTimelineSection,
} from "./components/TimelineSection";
import * as Data from "./types/Data";
import { Picture } from "./types/Picture";
import {
  addSection,
  removeSection,
  updateSection,
} from "./types/Timeline/Timeline";
import SidebarSection, { AddSidebarSection } from "./components/SidebarSection";
import * as Sidebar from "./types/Sidebar/Sidebar";

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

  const setIntro = (name: string) => {
    const newData = Data.setIntro(name, data);
    setData(newData);
  };

  return (
    <>
      <div className="edit-controls">
        <button onClick={upload}>Upload</button>
        <button onClick={download}>Download</button>
        <button onClick={print}>Print</button>
      </div>
      <div className="app">
        <Page format="a4" className="d-f">
          <div className="d-f p-2 w-100">
            <div className="w-30 pr-2 sidebar">
              <div className="text-center mb-2">
                <Avatar
                  picture={data.avatar}
                  onPictureChange={setPicture}
                  className="w-80"
                />
                <Name name={data.name} onChange={setName} />
              </div>
              {data.sidebar.sections.map((section, index) => (
                <SidebarSection
                  key={index}
                  section={section}
                  onChange={(newSection) => {
                    const newSidebar = Sidebar.updateSection(
                      index,
                      newSection,
                      data.sidebar
                    );
                    const newData = Data.setSidebar(newSidebar, data);
                    setData(newData);
                  }}
                  onRemove={() => {
                    const newSidebar = Sidebar.removeSection(
                      index,
                      data.sidebar
                    );
                    const newData = Data.setSidebar(newSidebar, data);
                    setData(newData);
                  }}
                />
              ))}
              <AddSidebarSection
                onClick={() => {
                  const newSidebar = Sidebar.addSection(data.sidebar);
                  const newData = Data.setSidebar(newSidebar, data);
                  setData(newData);
                }}
              />
            </div>
            <div className="w-70 d-f">
              <Timeline className="w-100">
                <Intro value={data.intro} onChange={setIntro} />
                {data.timeline.map((section, index) => (
                  <TimelineSection
                    key={index}
                    section={section}
                    onChange={(newSection) => {
                      const newTimeline = updateSection(
                        index,
                        newSection,
                        data.timeline
                      );
                      const newData = Data.setTimeline(newTimeline, data);
                      setData(newData);
                    }}
                    onRemove={() => {
                      const newTimeline = removeSection(index, data.timeline);
                      const newData = Data.setTimeline(newTimeline, data);
                      setData(newData);
                    }}
                  />
                ))}
                <AddTimelineSection
                  onClick={() => {
                    const newTimeline = addSection(data.timeline);
                    const newData = Data.setTimeline(newTimeline, data);
                    setData(newData);
                  }}
                />
              </Timeline>
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
