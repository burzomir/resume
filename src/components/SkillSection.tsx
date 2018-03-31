import * as React from 'react'

interface SkillSectionProps {
  name: string
}

const SkillSection: React.StatelessComponent<SkillSectionProps> = (props) => {
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

export default SkillSection
