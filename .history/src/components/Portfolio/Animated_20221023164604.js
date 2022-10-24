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

export const AnimatedWeather = () => {
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
