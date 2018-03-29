import * as React from 'react'
import { createRange } from '../utils/array'

interface RatingProps {
  value: number
  maxValue: number
}

const Rating: React.StatelessComponent<RatingProps> = (props) => {
  const {
    value,
    maxValue
  } = props

  return (
    <div className='rating'>
      {
        createRange(0, value)
          .map((n) => (
            <span className='rating__item icon-circle-fill' key={n} />
          ))
      }
      {
        createRange(value, maxValue)
          .map((n) => (
            <span className='rating__item icon-circle' key={n} />
          ))
      }
    </div>
  )
}

export default Rating
