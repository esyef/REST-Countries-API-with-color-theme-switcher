import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CountriesProvider from './context/CountriesContext'
import './index.css'
import ThemeProvider from './context/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountriesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountriesProvider>
  </React.StrictMode>
)

