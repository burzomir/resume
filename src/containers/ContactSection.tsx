import * as React from 'react'
import Icon from '../components/Icon'

const ContactSectionContainer: React.StatelessComponent = () => {
  return (
    <div className='mb-2'>
      <p><Icon icon='linkedin' /> michalklobukowski</p>
      <p><Icon icon='github' /> burzomir</p>
    </div>
  )
}

export default ContactSectionContainer
