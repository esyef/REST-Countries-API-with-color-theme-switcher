import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useThemeContext = () => {
  const { theme, changeThemeColor } = useContext(ThemeContext)

  return {
    theme,
    changeThemeColor
  }
}