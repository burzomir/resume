import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../assets/css/Glyphter.css'

import Timeline from './containers/Timeline'
import Avatar from './components/Avatar'
import LanguageSection from './containers/LanguageSection'
import TechnicalSkillSection from './containers/TechnicalSkillSection'

const App: React.StatelessComponent = () => {
  return (
    <div className='d-f p-2'>
      <div className='w-30 pr-2'>
        <div className='text-center'>
          <Avatar src={require('../assets/brzmr.png')} className='w-80' />
          <h1>Michał Kłobukowski</h1>
        </div>
        <h2>Contact</h2>
        <p>LinkedIn: michalklobukowski</p>
        <TechnicalSkillSection />
        <LanguageSection />
      </div>
      <div className='w-70 d-f'>
        <Timeline />
      </div>
    </div>
  )
}

export const run = () => {
  const rootElement = document.createElement('div')
  document.body.appendChild(rootElement)
  ReactDOM.render(<App />, rootElement)
}
