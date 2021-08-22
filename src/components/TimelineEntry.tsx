import * as React from "react";
import {
  Entry,
  setCompanyName,
  setEnded,
  setName,
  setStarted,
} from "../types/Timeline/Entry";
import { createRange } from "../utils/array";
import { useContentEditable } from "./ContentEditable";

interface TimelineEntryProps {
  entry: Entry;
  onChange: (entry: Entry) => void;
  onRemove: () => void;
}

export default function TimelineEntry(
  props: React.PropsWithChildren<TimelineEntryProps>
) {
  const { entry, onChange, onRemove, children } = props;

  const { name, companyName, started, ended } = entry;

  const formatDate = (date: Date | string) =>
    `${new Date(date).toLocaleDateString("en-us", {
      month: "long",
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
        <div className="timeline-entry--remove" onClick={onRemove}>
          Remove entry
        </div>
        <div className="d-f jc-sb">
          <span ref={nameRef} />
          {/* <small>{`${_started} - ${_ended}`}</small> */}
          <small>
            <span className="timeline-entry__date">
              {_started}
              <MonthPicker />
              <YearPicker />
              {/* <input
                type="date"
                value={new Date(started).toISOString().substr(0, 10)}
                onChange={(e) => {
                  const newDate = e.target.valueAsDate;
                  const newEntry = setStarted(newDate, entry);
                  onChange(newEntry);
                }}
              /> */}
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

type AddTimelineEntryProps = {
  onClick: () => void;
};

export function AddTimelineEntry(props: AddTimelineEntryProps) {
  return (
    <div className="timeline-entry timeline-entry--add" {...props}>
      <h4>Add new entry</h4>
    </div>
  );
}

function MonthPicker() {
  const now = new Date();
  const year = now.getFullYear();
  const months = createRange(0, 12)
    .map((month) => new Date(year, month))
    .map((date) => date.toLocaleDateString("en-us", { month: "long" }));
  return (
    <select>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}

function YearPicker() {
  const now = new Date().getFullYear();
  const years = createRange(0, 100).map((x) =>
    new Date(now - x, 0).getFullYear()
  );
  return (
    <select>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
