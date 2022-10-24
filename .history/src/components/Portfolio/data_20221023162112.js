import schoolImage from '../../assets/images/school-portfolio.png'
import weatherImage from '../../assets/images/weather-app.png'
import useAnimatedLetters from '../../lib/hooks/useAnimatedLetters'

export const AnimatedSchool = () => {
  const letterSchool = [
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
  const animatedSchool = useAnimatedLetters(letterSchool)
  return animatedSchool
}

const AnimatedWeather = () => {
  const letterWeather = [
    'W',
    'e',
    'a',
    't',
    'h',
    'e',
    'r',
    ' ',
    'A',
    'p',
    'p',
    'l',
    'i',
    'c',
    'a',
    't',
    'i',
    'o',
    'n',
  ]
  const animatedWeather = useAnimatedLetters(letterWeather)
  return animatedWeather
}

export const schoolPortfolio = {
  animated: AnimatedSchool(),
  techArray: [
    'ReactJS',
    'TailwindCSS',
    'NextJS',
    'Redux Toolkit Query',
    'MongoDB',
  ],
  featuresArray: [
    'CRUD (Create, Read, Update, Delete)',
    'Manage school data',
    'Dashboard',
    'Responsive Layout (Desktop and Mobile)',
    'Login Authentication (Students, Teachers, Admin)',
    'Chat system (Coming soon)',
  ],
  demoLink: '',
  codeLink: '',
  imageLink: schoolImage,
}

export const weatherPortfolio = {
  animated: AnimatedWeather(),
  techArray: ['HTML', 'CSS', 'Vanilla JS', 'Openweathermap API'],
  featuresArray: [
    'Real time weather',
    '7 days weather prediction (coming soon)',
    '24 hour weather prediction (coming soon',
    'Responsive Layout (Desktop and Mobile)',
  ],
  demoLink: 'https://riandev25.github.io/js-weather-app/dist/',
  codeLink: 'https://github.io/riandev25/js-weather-app',
  imageLink: weatherImage,
}
