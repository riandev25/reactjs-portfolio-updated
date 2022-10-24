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

const SkillList = () => {
  return (
    <div>
      <section>
        <h2>Tools</h2>
        <FontAwesomeIcon icon={faHtml5} color="#F06529" size="8x" />
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="8x" />
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="8x" />
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="8x" />
        <img className="w-6" src={TailwindIcon} alt="tailwind" />
        <img src={NextjsIcon} alt="nextjs" />
        <img src={ReduxIcon} alt="redux" />
        <img src={NodejsIcon} alt="nodejs" />
        <img src={MongodbIcon} alt="mongodb" />
        <FontAwesomeIcon icon={faGitSquare} color="#F06529" size="8x" />
      </section>
    </div>
  )
}

export default SkillList
