import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles.css'
import './chips.css'
import './pagination.css'
import './notification.css'

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
