import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState('light')

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    setTheme(currentTheme)
  }, [])

  const changeThemeColor = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={ { theme, changeThemeColor } }>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider