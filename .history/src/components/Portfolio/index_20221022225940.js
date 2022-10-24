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
        <div className="flex flex-row gap-8 xl:flex-col">
          <section>
            <h4>Technologies</h4>
            <ul className="">
              {techArray.map((item) => (
                <li className="text-[15px] pl-4 text-[#fff]">{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Features</h4>
            <ul>
              {featuresArray.map((item) => (
                <li className="text-[15px] pl-4 text-[#fff]">{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex justify-center items-center gap-6 mt-8 mx-12">
          <a
            href=""
            className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Live Demo
          </a>
          <a
            href=""
            className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="portfolio-section">
        <img className="w-full h-96" src={PortfolioSchool} alt="school" />
        <img className="w-full h-96" src={PortfolioWeather} alt="weather" />
      </div>
    </div>
  )
}

export default Portfolio
