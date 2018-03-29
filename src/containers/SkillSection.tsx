import * as React from 'react'
import SkillRating from '../containers/SkillRating'
import { data } from '../data'
import { findById } from '../utils/array'

interface SkillSectionContainerProps {
  id: number
}

const SkillSectionContainer: React.StatelessComponent<SkillSectionContainerProps> = (props) => {
  const skillSection = findById(data.skillSections)(props.id)
  return skillSection ? (
    <div className='mb-3'>
      <h2>{skillSection.name}</h2>
      {
        skillSection.skills.map((id) => <SkillRating {...{ id }} key={id}/>)
      }
    </div>
  ) : null
}

export default SkillSectionContainer
