import * as React from 'react'
import { data } from '../data'
import SkillSection from '../components/SkillSection'
import TechnicalSkillRating from './TechnicalSkillRating'

const TechnicalSkillSectionContainer: React.StatelessComponent = (props) => {
  return (
    <SkillSection name='Skills'>
      {
        data.skillSections[0].skills.map(id => <TechnicalSkillRating id={id} key={id}/>)
      }
    </SkillSection>
  )
}

export default TechnicalSkillSectionContainer
