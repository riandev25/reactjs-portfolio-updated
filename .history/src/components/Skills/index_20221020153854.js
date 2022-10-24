import Loader from 'react-loaders'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'

import AnimatedLetters from '../AnimatedLetters'
import SkillList from './skills'

const Skills = () => {
  const letterClass = useAnimatedLetters()

  return (
    <>
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
        <section className="stage-cube-cont">
          <SkillList />
        </section>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
