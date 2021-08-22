import * as React from 'react'

export default function Avatar(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { className, ...rest } = props
  return <img className={`avatar ${className ? className : ''}`} {...rest} />
}

