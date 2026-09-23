import { useEffect } from 'react'

// Map field trong `config.theme` -> biến CSS khai báo ở :root (src/index.css).
// Field nào không có trong data thì giữ nguyên giá trị mặc định trong CSS.
const THEME_VARS = {
  primary: '--primary',
  primaryDark: '--primary-dark',
  dark: '--dark',
  darkSoft: '--dark-soft',
  text: '--text',
  textLight: '--text-light',
  bg: '--bg',
  bgSoft: '--bg-soft',
  border: '--border',
}

// Ghi đè biến CSS trên <html> theo `config.theme`.
export function useTheme(theme) {
  useEffect(() => {
    const style = document.documentElement.style
    for (const [key, cssVar] of Object.entries(THEME_VARS)) {
      const value = theme?.[key]
      if (value) style.setProperty(cssVar, value)
      else style.removeProperty(cssVar)
    }
  }, [theme])
}
