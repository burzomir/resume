import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Timeline from './containers/Timeline'

const App: React.StatelessComponent = () => {
  return (
    <div>
      <div className='p-2'>
        <h1>Michał Kłobukowski</h1>
      </div>
      <div className='d-f pl-2'>
        <div className='w-30'>
          <h1>Info</h1>
          <h1>Skills</h1>
          <h1>Languages</h1>
        </div>
        <div className='w-70 pr-2 d-f'>
          <Timeline/>
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
