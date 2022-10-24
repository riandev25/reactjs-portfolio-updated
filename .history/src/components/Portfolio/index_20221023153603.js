// import { useState } from 'react'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'
import PortfolioSchool from '../../assets/images/school-portfolio.png'
// import PortfolioWeather from '../../assets/images/weather-app.png'
import usePortfolio from '../../lib/hooks/usePortfolio'
import { schoolPortfolio, weatherPortfolio } from './data'

const Portfolio = () => {
  const {
    letterSchool,
    techSchool,
    featuresSchool,
    demoSchool,
    codeSchool,
    imageSchool,
  } = schoolPortfolio
  // const {
  //   lettersWeather,
  //   techWeather,
  //   featuresWeather,
  //   demoWeather,
  //   codeWeather,
  //   imag,
  // } = weatherPortfolio
  // const school = usePortfolio(
  //   lettersArray,
  //   techArray,
  //   featuresArray,
  //   demolink,
  //   codeLink,
  //   portfolioImage
  // )
  // const weather = usePortfolio(
  //   lettersArray,
  //   techArray,
  //   featuresArray,
  //   demolink,
  //   codeLink,
  //   portfolioImage
  // )
  // const [project, setProject] = useState('school')

  // const schoolArray = [
  //   'S',
  //   'c',
  //   'h',
  //   'o',
  //   'o',
  //   'l',
  //   ' ',
  //   'M',
  //   'a',
  //   'n',
  //   'a',
  //   'g',
  //   'e',
  //   'm',
  //   'e',
  //   'n',
  //   't',
  //   ' ',
  //   'S',
  //   'y',
  //   's',
  //   't',
  //   'e',
  //   'm',
  // ]
  const portfolioArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
  const animatedSchool = useAnimatedLetters(letterSchool)

  // const techArray = [
  //   'ReactJS',
  //   'TailwindCSS',
  //   'NextJS',
  //   'Redux Toolkit Query',
  //   'MongoDB',
  // ]
  // const featuresArray = [
  //   'CRUD (Create, Read, Update, Delete)',
  //   'Manage school data',
  //   'Dashboard',
  //   'Responsive Layout (Desktop and Mobile)',
  //   'Login Authentication (Students, Teachers, Admin)',
  //   'Chat system (Coming soon)',
  // ]

  return (
    <div className="container portfolio-page">
      <div id="animation-carousel" class="relative" data-carousel="static">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <div className="text-zone">
              <h1>{animatedSchool}</h1>
              <div className="flex flex-row gap-8 xl:flex-col">
                <section>
                  <h4>Technologies</h4>
                  <ul className="">
                    {techSchool.map((item) => (
                      <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4>Features</h4>
                  <ul>
                    {featuresSchool.map((item) => (
                      <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="flex justify-center items-center gap-6 mt-8 mx-12">
                <a
                  href={demoSchool}
                  className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Live Demo
                </a>
                <a
                  href={codeSchool}
                  className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="portfolio-section">
              <img className="max-w-4xl h-4/5" src={imageSchool} alt="school" />
              {/* <img className="w-full h-96" src={PortfolioWeather} alt="weather" /> */}
            </div>
          </div>

          <div class="hidden duration-200 ease-linear" data-carousel-item>
            <div className="text-zone">
              <h1>{animatedSchool}</h1>
              <div className="flex flex-row gap-8 xl:flex-col">
                <section>
                  <h4>Technologies</h4>
                  <ul className="">
                    {techSchool.map((item) => (
                      <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4>Features</h4>
                  <ul>
                    {featuresSchool.map((item) => (
                      <li className="text-[10px] pl-4 text-[#fff] md:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="flex justify-center items-center gap-6 mt-8 mx-12">
                <a
                  href={demoSchool}
                  className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Live Demo
                </a>
                <a
                  href={codeSchool}
                  className="flex justify-center w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="portfolio-section">
              <img className="max-w-4xl h-4/5" src={imageSchool} alt="school" />
              {/* <img className="w-full h-96" src={PortfolioWeather} alt="weather" /> */}
            </div>
          </div>
        </div>

        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Portfolio