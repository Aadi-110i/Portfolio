import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
type Theme = 'light' | 'dark'
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme
    return saved || 'light'
  })
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    
    // Remove the old theme and apply the new one
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    body.classList.remove('light', 'dark')
    body.classList.add(theme)
    
    // Save to local storage
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
