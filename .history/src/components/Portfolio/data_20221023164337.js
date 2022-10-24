import schoolImage from '../../assets/images/school-portfolio.png'
import weatherImage from '../../assets/images/weather-app.png'
import { AnimatedSchool, AnimatedWeather } from './Animated'

const animatedSchool = AnimatedSchool()
const animatedWeather = AnimatedWeather

export const schoolPortfolio = {
  animated: animatedSchool,
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
  animated: animatedWeather,
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
