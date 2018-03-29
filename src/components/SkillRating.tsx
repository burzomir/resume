import * as React from 'react'
import Rating from './Rating'

interface SkillRatingProps {
  name: string
  rating: number
}

const SkillRating: React.StatelessComponent<SkillRatingProps> = (props) => {
  const {
    name,
    rating
  } = props

  return (
    <div>
      <h3>{name}</h3>
      <Rating value={rating} maxValue={6}/>
    </div>
  )
}

export default SkillRating
