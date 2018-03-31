import * as React from 'react'
import SkillRating from './SkillRating'

interface LanguageRatingProps {
  name: string
  rating: number
}

const labels = ['Beginner', 'Junior', 'Regular', 'Advanced', 'Master']
const maxRating = 5

const LanguageRating: React.StatelessComponent<LanguageRatingProps> = (props) => {
  const {
    name,
    rating
  } = props

  return <SkillRating {...{ name, rating, labels, maxRating }} />
}

export default LanguageRating
