import { useState } from 'react'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'
import PortfolioSchool from '../../assets/images/school-portfolio.png'
import PortfolioWeather from '../../assets/images/weather-app.png'

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
        <div className="flex flex-row gap-8">
          <section>
            <h4>Technologies</h4>
            <ul className="">
              {techArray.map((item) => (
                <li className="text-[18px]">{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Features</h4>
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
      <div className="portfolio-section">
        <img src={PortfolioSchool} alt="school" />
        <img src={PortfolioWeather} alt="weather" />
      </div>
    </div>
  )
}

export default Portfolio
