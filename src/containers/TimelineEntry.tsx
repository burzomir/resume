import * as React from 'react'
import TimelineEntry from '../components/TimelineEntry'
import { findById } from '../utils/array'
import { data } from '../data'

interface TimelineEntryContainerProps {
  id: number
}

const TimelineEntryContainer: React.StatelessComponent<TimelineEntryContainerProps> = (props) => {
  const { id } = props
  const { name } = findById(data.entries)(id)
  return (
    <TimelineEntry
      name={name}
      started={new Date()}
    />
  )
}

export default TimelineEntryContainer
