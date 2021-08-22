import * as React from 'react'
import { createRange } from '../utils/array'
import Icon from './Icon'

interface RatingProps {
  value: number
  maxValue: number
}

export default function Rating(props: RatingProps) {
  const {
    value,
    maxValue
  } = props

  return (
    <div className='rating'>
      {
        createRange(0, value)
          .map((n) => (
            <span className='rating__item' key={n}>
              <Icon icon='circle-fill' />
            </span>
          ))
      }
      {
        createRange(value, maxValue)
          .map((n) => (
            <span className='rating__item' key={n}>
              <Icon icon='circle' />
            </span>
          ))
      }
    </div>
  )
}

