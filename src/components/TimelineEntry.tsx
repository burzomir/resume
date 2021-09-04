import * as React from "react";
import {
  addText,
  Entry,
  setCompanyName,
  setEnded,
  setName,
  setStarted,
  updateText,
} from "../types/Timeline/Entry";
import { createRange } from "../utils/array";
import { useContentEditable } from "./ContentEditable";
import calculateSize from "calculate-size";
import { Text } from "./Text";

interface TimelineEntryProps {
  entry: Entry;
  onChange: (entry: Entry) => void;
  onRemove: () => void;
}

export default function TimelineEntry(props: TimelineEntryProps) {
  const { entry, onChange, onRemove } = props;

  const { name, companyName, started, ended } = entry;

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
          <small>
            <DatePicker
              date={new Date(started)}
              onChange={(date) => date && onChange(setStarted(date, entry))}
            />
            -&nbsp;&nbsp;
            <DatePicker
              date={ended ? new Date(ended) : null}
              onChange={(date) => {
                onChange(setEnded(date, entry));
              }}
              optional
            />
          </small>
        </div>
        <small ref={companyNameRef} />
      </h4>
      {entry.content.map((text, index) => (
        <Text
          text={text}
          key={index}
          onChange={(newText) => {
            onChange(updateText(index, newText, entry));
          }}
        />
      ))}
      <div
        className="timeline-entry__add-text"
        onClick={() => {
          onChange(addText(entry));
        }}
      >
        Add text
      </div>
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

type DatePickerProps = {
  date: Date | null;
  onChange: (date: Date | null) => void;
  optional?: boolean;
};

function DatePicker(props: DatePickerProps) {
  return (
    <span className="datepicker">
      <MonthPicker {...props} />
      <YearPicker {...props} />
    </span>
  );
}

function MonthPicker(props: DatePickerProps) {
  const now = new Date();
  const year = now.getFullYear();
  const months = createRange(0, 12)
    .map((month) => new Date(year, month))
    .map((date) => date.toLocaleDateString("en-us", { month: "long" }));
  if (!props.date) {
    return null;
  }
  const selectedMonth = months[props.date.getMonth()];
  return (
    <select
      className="datepicker__month"
      onChange={(e) => {
        const month = e.target.value;
        const newDate = new Date(
          props.date?.getFullYear() || new Date().getFullYear(),
          months.findIndex((m) => m === month)
        );
        props.onChange(newDate);
      }}
      value={selectedMonth}
      style={{ width: calculateSize(selectedMonth).width }}
    >
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}

function YearPicker(props: DatePickerProps) {
  const now = new Date().getFullYear();
  const years = createRange(0, 100).map((x) =>
    new Date(now - x, 0).getFullYear()
  );
  const optional = "optional" in props;
  const selectedYear = props.date ? props.date.getFullYear() : "";
  return (
    <select
      className="datepicker__year"
      value={selectedYear}
      onChange={(e) => {
        const year = parseInt(e.target.value);
        if (isNaN(year)) {
          props.onChange(null);
        } else {
          const newDate = new Date(props.date || new Date());
          newDate.setFullYear(year);
          props.onChange(newDate);
        }
      }}
      style={{
        width: calculateSize(selectedYear ? selectedYear.toString() : "Present")
          .width,
      }}
    >
      {optional && <option value="">Present</option>}
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
