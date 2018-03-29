import * as React from 'react'
import TimelineEntry from '../components/TimelineEntry'
import { findById } from '../utils/array'
import { data } from '../data'

interface TimelineEntryContainerProps {
  id: number
}

const TimelineEntryContainer: React.StatelessComponent<TimelineEntryContainerProps> = (props) => {
  const { id } = props
  const { name, started, ended, achievements } = findById(data.entries)(id)
  return (
    <TimelineEntry
      {...{
        name,
        started,
        ended
      }}
    >
      <ul>
        {
          achievements.map(text => <li key={text}>{text}</li>)
        }
      </ul>
    </TimelineEntry>
  )
}

export default TimelineEntryContainer
