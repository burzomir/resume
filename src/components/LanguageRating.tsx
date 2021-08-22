import * as React from 'react'
import SkillRating from './SkillRating'

interface LanguageRatingProps {
  name: string
  rating: number
}

const labels = ['A1', 'A2', 'B1', 'B2', 'C1', 'Native']
const maxRating = 6

export default function LanguageRating(props: LanguageRatingProps) {
  const {
    name,
    rating
  } = props

  return <SkillRating {...{ name, rating, labels, maxRating }} />
}

