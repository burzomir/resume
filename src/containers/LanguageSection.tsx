import * as React from 'react'
import { data } from '../data'
import SkillSection from '../components/SkillSection'
import LanguageRating from './LanguageRating'

const LanguageSectionContainer: React.StatelessComponent = (props) => {
  return (
    <SkillSection name='Languages'>
      {
        data.skillSections[1].skills.map(id => <LanguageRating id={id} key={id}/>)
      }
    </SkillSection>
  )
}

export default LanguageSectionContainer
