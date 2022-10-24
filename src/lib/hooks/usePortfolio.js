import useAnimatedLetters from "./useAnimatedLetters"

const usePortfolio = ({lettersArray, techArray, featuresArray, demoLink, codeLink, portfolioImage}) => {
  const animatedPortfolio = useAnimatedLetters(lettersArray)

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>{animatedPortfolio}</h1>
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
        <img className="max-w-4xl h-4/5" src={portfolioImage} alt="school" />
        {/* <img className="w-full h-96" src={PortfolioWeather} alt="weather" /> */}
      </div>
    </div>
  )
}

export default usePortfolio