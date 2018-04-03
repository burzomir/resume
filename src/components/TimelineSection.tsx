import * as React from 'react'

interface TimelineSectionProps {
  name: string
}

const TimelineSection: React.StatelessComponent<TimelineSectionProps> = (props) => {
  const {
    name,
    children
  } = props

  return (
    <div className='timeline-section'>
      <h2>{name}</h2>
      {children}
    </div>
  )
}

export default TimelineSection
