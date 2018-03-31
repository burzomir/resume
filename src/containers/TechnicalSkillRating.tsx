import * as React from 'react'
import TechnicalSkillRating from '../components/TechnicalSkillRating'
import { data } from '../data'
import { findById } from '../utils/array'

interface TechnicalSkillRatingContainerProps {
  id: number
}

const TechnicalSkillRatingContainer: React.StatelessComponent<TechnicalSkillRatingContainerProps> = (props) => {
  const skill = findById(data.skills)(props.id)
  return skill ? <TechnicalSkillRating {...skill} /> : null
}

export default TechnicalSkillRatingContainer
