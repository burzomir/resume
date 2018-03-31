import * as React from 'react'

interface PageProps extends React.HTMLProps<HTMLDivElement> {
  format: 'a4'
}

const Page: React.StatelessComponent<PageProps> = ({ format, className, children, ...props }) => {
  return (
    <div className={`page page--${format}`}>
      <div className={`page__content ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}

export default Page
