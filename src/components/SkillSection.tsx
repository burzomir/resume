import * as React from 'react'

interface SkillSectionProps {
  name: string
}

export default function SkillSection(props: React.PropsWithChildren<SkillSectionProps>) {
  const {
    name,
    children
  } = props

  return (
    <div className='skill-section mb-3'>
      <h2 className='mb-1'>{name}</h2>
      {children}
    </div>
  )
}

