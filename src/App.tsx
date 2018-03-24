import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App: React.StatelessComponent = () => {
  return (
    <h1>Hello world!</h1>
  )
}

export const run = () => {
  const rootElement = document.createElement('div')
  document.body.appendChild(rootElement)
  ReactDOM.render(<App />, rootElement)
}
