import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../assets/css/Glyphter.css'

import Timeline from './containers/Timeline'
import SkillSection from './containers/SkillSection'

const App: React.StatelessComponent = () => {
  return (
    <div>
      <div className='p-2'>
        <h1>Michał Kłobukowski</h1>
      </div>
      <div className='d-f pl-2'>
        <div className='w-30'>
          <SkillSection id={1}/>
          <SkillSection id={2}/>
        </div>
        <div className='w-70 pr-2'>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export const run = () => {
  const rootElement = document.createElement('div')
  document.body.appendChild(rootElement)
  ReactDOM.render(<App />, rootElement)
}
