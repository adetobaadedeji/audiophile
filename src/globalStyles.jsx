import { css, createGlobalStyle } from 'styled-components'

// Media Querie Breakpoints
export const breakpoints = {
	sm: '480px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
}

//breakpoint mixin logic  with styled-components
export const screenSize = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media (min-width: ${breakpoints[label]}) {
				${css(...args)};
			}
		`
		return accumulator
	},
	{}
)

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

// Colors

--color-main-normal: hsl(22, 65%, 57%);
--color-main-light: hsl(21, 94%, 75%);
--color-main-dark: hsl(0, 65%, 49%);

--color-white: hsl(0, 0%, 100%);
--color-black: hsl(0, 0%, 0%);

--color-gray-100: hsl(0, 0%, 98%);
--color-gray-200: hsl(0, 0%, 95%);
--color-gray-300: hsl(0, 0%, 90%);
--color-gray-400: hsl(0, 0%, 89%);
--color-gray-500: hsl(0, 0%, 81%);
--color-gray-600: hsl(0, 0%, 48%);
--color-gray-700: hsl(0, 0%, 10%);
--color-gray-800: hsl(0, 0%, 6%);


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 81.25%;

  ${screenSize.lg`
     font-size: 100%;
  `}
   ${screenSize.md`
     font-size: 93.75%;
  `}
  ${screenSize.sm`
     font-size: 87.5%;
  `}
}

body {
font-family: 'Manrope', sans-serif;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 23rem);
}

`
