import * as React from 'react'

const Timeline: React.StatelessComponent<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
  return (
    <div className={`timeline pl-2 ${className}`} {...rest} />
  )
}

export default Timeline
