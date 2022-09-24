import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const APP_NODE = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(APP_NODE).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
