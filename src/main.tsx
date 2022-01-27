import React from 'react'
import ReactDOM from 'react-dom'
import ContextProvider from './Context/Context'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider />
  </React.StrictMode>,
  document.getElementById('root')
)
