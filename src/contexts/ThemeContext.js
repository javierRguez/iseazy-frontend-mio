import React, { createContext, useState, useMemo } from 'react'
import { lightTheme, darkTheme } from '../styles/themeColors'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const currentTheme = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const value = { theme, setTheme, currentTheme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext
