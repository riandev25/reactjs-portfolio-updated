import { useState } from 'react'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'

const Portfolio = () => {
  const [project, setProject] = useState('school')

  const schoolArray = [
    'S',
    'c',
    'h',
    'o',
    'o',
    'l',
    ' ',
    'M',
    'a',
    'n',
    'a',
    'g',
    'e',
    'm',
    'e',
    'n',
    't',
    ' ',
    'S',
    'y',
    's',
    't',
    'e',
    'm',
  ]
  const portfolioArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
  const animatedPortfolio = useAnimatedLetters(portfolioArray)

  const techArray = [
    'ReactJS',
    'TailwindCSS',
    'NextJS',
    'Redux Toolkit Query',
    'MongoDB',
  ]
  const featuresArray = [
    'CRUD (Create, Read, Update, Delete)',
    'Manage school data',
    'Dashboard',
    'Responsive Layout (Desktop and Mobile)',
    'Login Authentication (Students, Teachers, Admin)',
    'Chat system (Coming soon)',
  ]

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>{animatedPortfolio}</h1>
        <div>
          <section>
            <h3>Technologies</h3>
            <ul>
              {techArray.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Features</h3>
            <ul>
              {featuresArray.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <section>
          <a href="">Live demo</a>
          <a href="">Source code</a>
        </section>
      </div>
      <div className="skills-section">
        <img src />
      </div>
    </div>
  )
}

export default Portfolio