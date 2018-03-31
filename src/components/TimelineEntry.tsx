import * as React from 'react'

interface TimelineEntryProps {
  name: string
  companyName: string
  started: Date
  ended?: Date
}

const TimelineEntry: React.StatelessComponent<TimelineEntryProps> = (props) => {
  const {
    name,
    companyName,
    started,
    ended,
    children
  } = props

  const formatDate = (date: Date) => `${date.toLocaleDateString('en-us', { month: 'short', year: 'numeric' })}`
  const _started = formatDate(started)
  const _ended = ended ? formatDate(ended) : 'Present'

  return (
    <div className='timeline-entry'>
      <h3 className='d-f jc-sb'>
        <span>
          <span>{name}</span>
          &nbsp;-&nbsp;
          <span>{companyName}</span>
        </span>
        <span>{`${_started} - ${_ended}`}</span>
      </h3>
      {children}
    </div>
  )
}

export default TimelineEntry
