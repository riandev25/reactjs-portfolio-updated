import { useState } from 'react'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'
import schoolImage from '../../assets/images/school-portfolio.png'
import weatherImage from '../../assets/images/weather-app.png'
import { schoolPortfolio, weatherPortfolio } from './data'

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(schoolPortfolio)

  const { letterArray, techArray, featuresArray, demoLink, codeLink } =
    portfolioData

  const animatedLetters = useAnimatedLetters(letterArray)
  const [animated, setAnimated] = useState(animatedLetters)

  const schoolDataHandler = () => {
    setPortfolioData(schoolPortfolio)
    // setAnimated(animatedLetters)
  }

  const weatherDataHandler = () => {
    setPortfolioData(weatherPortfolio)
    // setAnimated(animatedLetters)
  }

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>{animated}</h1>
        <div className="flex flex-row gap-8 xl:flex-col">
          <section>
            <h4>Technologies</h4>
            <ul className="">
              {techArray.map((item) => (
                <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Features</h4>
            <ul>
              {featuresArray.map((item) => (
                <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex justify-center items-center gap-6 mt-8 mx-12">
          <a
            href={demoLink}
            className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="portfolio-section">
        <img
          className="max-w-4xl h-4/5"
          src={schoolImage}
          alt="school"
          onClick={schoolDataHandler}
        />
        <img
          className="max-w-4xl h-4/5"
          src={weatherImage}
          alt="weather"
          onClick={weatherDataHandler}
        />
      </div>
    </div>
  )
}

export default Portfolio
