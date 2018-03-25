import * as React from 'react'
import Timeline from '../components/Timeline'
import TimelineSection from './TimelineSection'
import { data } from '../data'

const TimelineContainer: React.StatelessComponent = () => {
  return (
    <Timeline>
      {
        data.timeline.sections.map((id) => <TimelineSection id={id} key={id} />)
      }
    </Timeline>
  )
}

export default TimelineContainer
