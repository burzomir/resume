import * as React from 'react'

export default function Timeline({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`timeline pl-2 ${className}`} {...rest} />
  )
}

