import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/context/ThemeContext'

declare global {
  interface Window {
    __TABO_SHOW_SPLASH__?: boolean
  }
}

function dismissSplashScreen() {
  const splash = document.getElementById('app-splash')
  if (!splash) {
    return
  }

  const shouldAnimate = window.__TABO_SHOW_SPLASH__ ?? true
  const splashDuration = shouldAnimate ? 1050 : 80

  window.setTimeout(() => {
    splash.setAttribute('data-state', 'hidden')
    window.setTimeout(() => splash.remove(), 450)
  }, splashDuration)
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>,
)

dismissSplashScreen()
