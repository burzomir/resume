import * as React from 'react'

const Avatar: React.StatelessComponent<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { className, ...rest } = props
  return <img className={`avatar ${className ? className : ''}`} {...rest} />
}

export default Avatar
