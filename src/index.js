//@ts-check

/**
 * @file index.js is the root file
 * @author Kirmann denis
 * @see <a href="https://github.com/denisk13005/sportsee" target= "_blank">Repo Git</a>
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../src/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
