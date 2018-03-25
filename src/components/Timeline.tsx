import * as React from 'react'

const Timeline: React.StatelessComponent = ({ children }) => {
  return (
    <div className='timeline pl-2'>
      {children}
    </div>
  )
}

export default Timeline
