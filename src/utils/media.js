import { css } from 'styled-components';

const sizes = {
  xl: 1200,
  desktop: 992,
  laptop: 768,
  tablet: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media;