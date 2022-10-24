import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loaders'
import {
  faCss3,
  faGitSquare,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import TailwindIcon from '../../assets/images/tailwind-css.svg'
import NextjsIcon from '../../assets/images/nextjs-icon.svg'
import ReduxIcon from '../../assets/images/redux-icon.svg'
import MongodbIcon from '../../assets/images/mongodb-icon.svg'
import NodejsIcon from '../../assets/images/node-js-icon.svg'
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
          <section className="flex flex-col gap-5">
            <section className="flex flex-col gap-2">
              <p>
                "The future belongs to those who learn more skills and combine
                them in creative way"
              </p>
              <aside className="italic text-lg">- Robert Greene</aside>
            </section>
            <section className="flex flex-col gap-2">
              <p>
                "The capacity to learn is a gift; the ability to learn is a
                skill; the willingness to learn is a choice."
              </p>
              <aside className="italic">- Brian Herbert</aside>
            </section>
          </section>
        </div>
      </div>
      <section>
        <div>
          <section>
            <h2>Tools</h2>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <TailwindIcon />
            <NextjsIcon />
            <ReduxIcon />
            <FontAwesomeIcon icon={faGitSquare} color="#F06529" />
            <NodejsIcon />
            <MongodbIcon />
          </section>
        </div>
      </section>
      <Loader type="pacman" />
    </Fragment>
  )
}

export default Skills
