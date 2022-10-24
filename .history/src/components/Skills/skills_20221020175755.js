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

const SkillList = () => {
  const languages = ['L', 'a', 'n', 'g', 'u', 'a', 'g', 'e', 's']
  const frameworks = ['F', 'r', 'a', 'm', 'e', 'w', 'o', 'r', 'k', 's']
  const AnimatedLanguages = useAnimatedLetters(languages)
  const AnimatedFrameworks = useAnimatedLetters(frameworks)
  return (
    <div>
      <section>
        <h3>{AnimatedLanguages}</h3>
        <section className="flex">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" size="8x" />
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="8x" />
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="8x" />

          {/* <img className="w-32" src={ReduxIcon} alt="redux" />
          <img className="w-32" src={NodejsIcon} alt="nodejs" />
          <img className="w-32" src={MongodbIcon} alt="mongodb" />
          <FontAwesomeIcon icon={faGitSquare} color="#F06529" size="8x" /> */}
        </section>
      </section>
      <section>
        <h3>{AnimatedFrameworks}</h3>
        <div className="flex">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="8x" />
          <img className="w-32" src={TailwindIcon} alt="tailwind" />
          <img className="w-32" src={NextjsIcon} alt="nextjs" />
        </div>
      </section>
    </div>
  )
}

export default SkillList
