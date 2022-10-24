import { useState, useEffect } from 'react'

const useAnimatedLetters = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return letterClass
}

export default useAnimatedLetters
