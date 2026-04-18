import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type AccentKey = 'lime' | 'coral' | 'blue' | 'magenta'

interface ThemeContextValue {
  theme: 'dark' | 'light'
  accent: AccentKey
  toggleTheme: () => void
  setAccent: (a: AccentKey) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ACCENTS: Record<AccentKey, { dark: string; light: string }> = {
  lime:    { dark: 'oklch(0.88 0.19 122)', light: 'oklch(0.65 0.19 135)' },
  coral:   { dark: 'oklch(0.78 0.16 35)',  light: 'oklch(0.62 0.17 35)' },
  blue:    { dark: 'oklch(0.58 0.18 250)', light: 'oklch(0.42 0.19 250)' },
  magenta: { dark: 'oklch(0.75 0.22 340)', light: 'oklch(0.55 0.22 340)' },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [accent, setAccentState] = useState<AccentKey>('blue')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const a = ACCENTS[accent]
    document.documentElement.style.setProperty('--accent', theme === 'dark' ? a.dark : a.light)
    const isLight = theme === 'light'
    document.documentElement.style.setProperty('--accent-ink', isLight ? '#F2EFE8' : '#0E0E0C')
  }, [theme, accent])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const setAccent = (a: AccentKey) => setAccentState(a)

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme outside ThemeProvider')
  return ctx
}
