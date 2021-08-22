import * as React from 'react'

interface PageProps extends React.HTMLProps<HTMLDivElement> {
  format: 'a4'
}

export default function Page({ format, className, children, ...props }: PageProps) {
  return (
    <div className={`page page--${format}`}>
      <div className={`page__content ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}

