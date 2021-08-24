import * as React from 'react'

type Icon = 'circle' | 'circle-fill' | 'github' | 'phone' | 'envelope' | 'linkedin' | 'plus' | 'minus'

interface IconProps {
  icon: Icon
}

export default function Icon({ icon }: IconProps) {
  return <span className={`icon-${icon}`} />
}

