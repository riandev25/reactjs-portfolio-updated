import { useState, useLayoutEffect } from 'react'

export const useWindowSize = (max) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth)
  }

  let width
  if (windowSize <= max) {
    width = 'hidden'
  } else {
    width = ''
  }

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('resize', updateWindowSize)
      updateWindowSize()
      return () => window.removeEventListener('resize', updateWindowSize)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return width
}
