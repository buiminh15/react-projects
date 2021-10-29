import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import 'normalize.css' // Note this
import 'index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
