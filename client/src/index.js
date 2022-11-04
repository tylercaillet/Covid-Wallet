import React from 'react'
import { createRoot } from 'react-router-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
