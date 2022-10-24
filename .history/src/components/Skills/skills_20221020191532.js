import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faGitSquare,
} from '@fortawesome/free-brands-svg-icons'
import TailwindIcon from '../../assets/images/tailwind-css.svg'
import NextjsIcon from '../../assets/images/nextjs-icon.svg'
import ReduxIcon from '../../assets/images/redux-icon.svg'
import MongodbIcon from '../../assets/images/mongodb-icon.svg'
import NodejsIcon from '../../assets/images/node-js-icon.svg'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'
import FigWrapper from '../../lib/UI/FigWrapper'

const SkillList = () => {
  const languages = ['L', 'a', 'n', 'g', 'u', 'a', 'g', 'e', 's']
  const frameworks = ['F', 'r', 'a', 'm', 'e', 'w', 'o', 'r', 'k', 's']
  const others = ['O', 't', 'h', 'e', 'r', ' ', 'T', 'o', 'o', 'l', 's']
  const AnimatedLanguages = useAnimatedLetters(languages)
  const AnimatedFrameworks = useAnimatedLetters(frameworks)
  const AnimatedTools = useAnimatedLetters(others)
  return (
    <div className="flex flex-col gap-6">
      <section classname="flex flex-col gap-4">
        <h3>{AnimatedLanguages}</h3>
        <section className="flex">
          <FigWrapper caption="HTML5">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" size="8x" />
          </FigWrapper>
          <FigWrapper caption="CSS3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="8x" />
          </FigWrapper>
          <FigWrapper caption="Javascript">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="8x" />
          </FigWrapper>
          <FigWrapper caption="NodeJS">
            <img className="w-32" src={NodejsIcon} alt="nodejs" />
          </FigWrapper>
        </section>
      </section>
      <section>
        <h3>{AnimatedFrameworks}</h3>
        <div className="flex">
          <FigWrapper caption="ReactJS">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="8x" />
          </FigWrapper>

          <FigWrapper caption="TailwindCSS">
            <img className="w-32 h-[88px]" src={TailwindIcon} alt="tailwind" />
          </FigWrapper>
          <FigWrapper caption="NextJS">
            <img className="w-32 h-[88px]" src={NextjsIcon} alt="nextjs" />
          </FigWrapper>
        </div>
      </section>
      <section>
        <h3>{AnimatedTools}</h3>
        <div className="flex">
          <FigWrapper caption="MongoDB">
            <img className="w-32 h-[88px]" src={MongodbIcon} alt="mongodb" />
          </FigWrapper>

          <FigWrapper caption="Redux">
            <img className="w-32 h-[88px]" src={ReduxIcon} alt="redux" />
          </FigWrapper>
          <FigWrapper caption="Git">
            <FontAwesomeIcon icon={faGitSquare} color="#F06529" size="8x" />
          </FigWrapper>
        </div>
      </section>
    </div>
  )
}

export default SkillList
