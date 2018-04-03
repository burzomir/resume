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
      <h4>
        <div className='d-f jc-sb'>
          <span>{name}</span>
          <small>{`${_started} - ${_ended}`}</small>
        </div>
        <small>{companyName}</small>
      </h4>
      {children}
    </div>
  )
}

export default TimelineEntry
