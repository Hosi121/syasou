import { useEffect } from 'react'

// Keep paper dialogs above a software keyboard without shrinking the scenery.
export function useVisualViewport() {
  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport) return
    const update = () => {
      // Let the browser handle pinch zoom instead of resizing the content under it.
      if (viewport.scale > 1.05) return
      document.documentElement.style.setProperty('--visual-height', `${viewport.height}px`)
      document.documentElement.style.setProperty('--visual-top', `${viewport.offsetTop}px`)
    }
    update()
    viewport.addEventListener('resize', update)
    viewport.addEventListener('scroll', update)
    return () => {
      viewport.removeEventListener('resize', update)
      viewport.removeEventListener('scroll', update)
      document.documentElement.style.removeProperty('--visual-height')
      document.documentElement.style.removeProperty('--visual-top')
    }
  }, [])
}
