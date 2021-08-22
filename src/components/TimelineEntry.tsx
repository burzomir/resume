import * as React from "react";
import {
  Entry,
  setCompanyName,
  setEnded,
  setName,
  setStarted,
} from "../types/Timeline/Entry";
import { useContentEditable } from "./ContentEditable";

interface TimelineEntryProps {
  entry: Entry;
  onChange: (entry: Entry) => void;
}

export default function TimelineEntry(
  props: React.PropsWithChildren<TimelineEntryProps>
) {
  const { entry, onChange, children } = props;

  const { name, companyName, started, ended } = entry;

  const formatDate = (date: Date | string) =>
    `${new Date(date).toLocaleDateString("en-us", {
      month: "short",
      year: "numeric",
    })}`;
  const _started = formatDate(started);
  const _ended = ended ? formatDate(ended) : "Present";

  const nameRef = useContentEditable({
    value: name,
    onChange: (newName) => onChange(setName(newName, entry)),
  });

  const companyNameRef = useContentEditable({
    value: companyName,
    onChange: (newCompanyName) =>
      onChange(setCompanyName(newCompanyName, entry)),
  });

  return (
    <div className="timeline-entry">
      <h4>
        <div className="d-f jc-sb">
          <span ref={nameRef} />
          {/* <small>{`${_started} - ${_ended}`}</small> */}
          <small>
            <span className="timeline-entry__date">
              {_started}
              <input
                type="date"
                value={new Date(started).toISOString().substr(0, 10)}
                onChange={(e) => {
                  const newDate = e.target.valueAsDate;
                  const newEntry = setStarted(newDate, entry);
                  onChange(newEntry);
                }}
              />
            </span>
            {" - "}
            <span className="timeline-entry__date">
              {_ended}
              <input
                type="date"
                value={(ended ? new Date(ended) : new Date())
                  .toISOString()
                  .substr(0, 10)}
                onChange={(e) => {
                  const newDate = e.target.valueAsDate;
                  const newEntry = setEnded(newDate, entry);
                  onChange(newEntry);
                }}
              />
            </span>
          </small>
        </div>
        <small ref={companyNameRef} />
      </h4>
      {children}
    </div>
  );
}
