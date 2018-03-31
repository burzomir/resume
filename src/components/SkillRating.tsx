import * as React from 'react'
import Rating from './Rating'

interface SkillRatingProps<> {
  name: string
  rating: number
  maxRating: number
  labels: string[]
}

const SkillRating: React.StatelessComponent<SkillRatingProps> = (props) => {
  const {
    name,
    rating,
    maxRating,
    labels
  } = props

  return (
    <div className='skill-rating'>
      <span className='skill-rating__name'>{name}</span>
      <div className='d-f'>
        <Rating value={rating} maxValue={maxRating}/>
        <i className='ml-1'>{labels[rating - 1]}</i>
      </div>
    </div>
  )
}

export default SkillRating
