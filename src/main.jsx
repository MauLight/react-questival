import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter as Router } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Router>
)
