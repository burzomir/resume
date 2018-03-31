import * as React from 'react'
import { data } from '../data'
import TimelineEntry from './TimelineEntry'

interface TimelineSubsectionContainerProps {
  id: number
}

const TimelineSubsectionContainer: React.StatelessComponent<TimelineSubsectionContainerProps> = (props) => {
  const { id } = props
  const { entries } = data.subsections.find(section => section.id === id)
  // const { name, entries } = data.subsections.find(section => section.id === id)
  return (
    <>
      {/* <h2>{name}</h2> */}
      {
        entries.map(id => <TimelineEntry id={id} key={id}/>)
      }
    </>
  )
}

export default TimelineSubsectionContainer
