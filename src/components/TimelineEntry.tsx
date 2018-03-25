import * as React from 'react'

interface TimelineEntryProps {
  name: string
  started: Date
  ended?: Date
}

const TimelineEntry: React.StatelessComponent<TimelineEntryProps> = (props) => {
  const {
    name,
    started,
    ended,
    children
  } = props

  const _started = started.getFullYear()
  const _ended = ended ? ended.getFullYear() : 'Present'

  return (
    <div className='timeline-entry'>
      <h3 className='d-f jc-sb'>
        <span>{name}</span>
        <span>{`${_started} - ${_ended}`}</span>
      </h3>
      {children}
    </div>
  )
}

export default TimelineEntry
