import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'

const Portfolio = () => {
  const schoolArray = ['S', 'c', 'h', 'o', 'o', 'l', ' ']
  const portfolioArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
  const animatedPortfolio = useAnimatedLetters(portfolioArray)

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>{animatedPortfolio}</h1>
        <section></section>
      </div>
    </div>
  )
}

export default Portfolio
