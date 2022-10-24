import { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Fragment>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <section className="flex flex-col gap-4">
            <section className="flex gap-2">
              <p>
                "The future belongs to those who learn more skills and combine
                them in creative way"
              </p>
              <aside className="italic text-lg">- Robert Greene</aside>
            </section>
            <section className="flex gap-2">
              <p>
                "The capacity to learn is a gift; the ability to learn is a
                skill; the willingness to learn is a choice."
              </p>
              <aside className="italic">- Brian Herbert</aside>
            </section>
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  )
}

export default Skills
