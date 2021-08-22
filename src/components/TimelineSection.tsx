import * as React from 'react'

interface TimelineSectionProps {
  name: string
}

export default function TimelineSection(props: React.PropsWithChildren<TimelineSectionProps>) {
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

