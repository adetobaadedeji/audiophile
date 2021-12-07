import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const ContentContainer = styled.div`
	/* height: 51rem; */
	display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
  text-align: center;

	/* ${screenSize.md`
		height: 49rem;
	`}

	${screenSize.xmd`
			height: 47rem;
	`} */

	& > * {
		display: flex;
		align-items: center;
		justify-content: center;

		${screenSize.nsm`
      align-items: flex-start;
			justify-content: flex-start;
			
    `}
		
	}
`

export const TopHeading = styled.h6`
	text-transform: uppercase;
	letter-spacing: 0.625rem;
	font-size: 0.875rem;
	color: var(--color-pry-300);
`
export const MainHeading = styled.h1`
	text-transform: uppercase;
	margin: 1rem 0rem;
  font-size: 3.2rem;
	color: var(--color-sec-200);
`
export const Description = styled.p`
	color: var(--color-main-normal);
	max-width: 25rem;
	margin: 0rem auto 1.3rem auto;
	font-size: 1.5rem;
`
