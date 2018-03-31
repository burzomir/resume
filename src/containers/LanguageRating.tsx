import * as React from 'react'
import LanguageRating from '../components/LanguageRating'
import { data } from '../data'
import { findById } from '../utils/array'

interface LanguageRatingContainerProps {
  id: number
}

const LanguageRatingContainer: React.StatelessComponent<LanguageRatingContainerProps> = (props) => {
  const skill = findById(data.skills)(props.id)
  return skill ? <LanguageRating {...skill}/> : null
}

export default LanguageRatingContainer
