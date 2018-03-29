import * as React from 'react'
import SkillRating from '../components/SkillRating'
import { data } from '../data'
import { findById } from '../utils/array'

interface SkillRatingContainerProps {
  id: number
}

const SkillRatingContainer: React.StatelessComponent<SkillRatingContainerProps> = (props) => {
  const skill = findById(data.skills)(props.id)
  return skill ? <SkillRating {...skill} /> : null
}

export default SkillRatingContainer
