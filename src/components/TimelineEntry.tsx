import * as React from "react";
import { Entry, setCompanyName, setName } from "../types/Timeline/Entry";
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
          <small>{`${_started} - ${_ended}`}</small>
        </div>
        <small ref={companyNameRef} />
      </h4>
      {children}
    </div>
  );
}
