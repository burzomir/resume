import * as React from 'react'
import TimelineSection from '../components/TimelineSection'
import TimelineSubsection from './TimelineSubsection'
import { findById } from '../utils/array'
import { data } from '../data'

interface TimelineSectionContainerProps {
  id: number
}

const TimelineSectionContainer: React.StatelessComponent<TimelineSectionContainerProps> = (props) => {
  const { id } = props
  const { name, subsections } = findById(data.sections)(id)
  return (
    <TimelineSection name={name}>
      {
        subsections.map((id) => <TimelineSubsection id={id} key={id} />)
      }
    </TimelineSection>
  )
}

export default TimelineSectionContainer
