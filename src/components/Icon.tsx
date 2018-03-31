import * as React from 'react'

type Icon = 'circle' | 'circle-fill' | 'github' | 'phone' | 'envelope' | 'linkedin'

interface IconProps {
  icon: Icon
}

const Icon: React.StatelessComponent<IconProps> = ({ icon }) => <span className={`icon-${icon}`} />

export default Icon
