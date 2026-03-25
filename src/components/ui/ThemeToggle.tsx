import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
      style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          minWidth: '24px',
          minHeight: '24px',
          padding: 0,
          marginTop: '4px',
          borderRadius: '4px',
          border: 'none',
          background: 'transparent',
          color: 'var(--color-text)'
      }}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={1.5} />
      ) : (
        <Sun size={18} strokeWidth={1.5} />
      )}
    </button>
  )
}
