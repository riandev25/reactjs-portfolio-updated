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
import ExpressjsIcon from '../../assets/images/express-js-icon.svg'
import MysqlIcon from '../../assets/images/mysql-icon.svg'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'
import FigWrapper from '../../lib/UI/FigWrapper'

const SkillList = () => {
  const languages = ['L', 'a', 'n', 'g', 'u', 'a', 'g', 'e', 's']
  const frameworks = ['F', 'r', 'a', 'm', 'e', 'w', 'o', 'r', 'k', 's']
  const others = ['O', 't', 'h', 'e', 'r', ' ', 'T', 'o', 'o', 'l', 's']
  const comingsoon = ['C', 'o', 'm', 'i', 'n', 'g', ' ', 'S', 'o', 'o', 'n']
  const AnimatedLanguages = useAnimatedLetters(languages)
  const AnimatedFrameworks = useAnimatedLetters(frameworks)
  const AnimatedTools = useAnimatedLetters(others)
  const AnimatedSoon = useAnimatedLetters(comingsoon)
  return (
    <div className="flex flex-col gap-6">
      <section classname="flex flex-col justify-center items-center gap-4">
        <h3>{AnimatedLanguages}</h3>
        <span className="flex flex-row gap-4">
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
        </span>
      </section>
      <section classname="flex flex-col justify-center items-center gap-4 ">
        <h3>{AnimatedFrameworks}</h3>
        <span className="flex flex-row gap-4">
          <FigWrapper caption="ReactJS">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="8x" />
          </FigWrapper>

          <FigWrapper caption="TailwindCSS">
            <img className="w-32 h-[88px]" src={TailwindIcon} alt="tailwind" />
          </FigWrapper>
          <FigWrapper caption="NextJS">
            <img className="w-32 h-[88px]" src={NextjsIcon} alt="nextjs" />
          </FigWrapper>
        </span>
      </section>
      <section classname="flex flex-col justify-center items-center gap-4">
        <h3>{AnimatedTools}</h3>
        <span className="flex flex-row gap-4">
          <FigWrapper caption="MongoDB">
            <img className="w-32 h-[88px]" src={MongodbIcon} alt="mongodb" />
          </FigWrapper>

          <FigWrapper caption="Redux">
            <img className="w-32 h-[88px]" src={ReduxIcon} alt="redux" />
          </FigWrapper>
          <FigWrapper caption="Git">
            <FontAwesomeIcon icon={faGitSquare} color="#F06529" size="8x" />
          </FigWrapper>
        </span>
      </section>
      <section classname="flex flex-col justify-center items-center gap-4">
        <h3>{AnimatedSoon}</h3>
        <span className="flex flex-row gap-4">
          <FigWrapper caption="ExpressJS">
            <img
              className="w-32 h-[88px]"
              src={ExpressjsIcon}
              alt="expressjs"
            />
          </FigWrapper>

          <FigWrapper caption="MySql">
            <img className="w-32 h-[88px]" src={MysqlIcon} alt="mysql" />
          </FigWrapper>
        </span>
      </section>
    </div>
  )
}

export default SkillList
