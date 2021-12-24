import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import aboutImageMobile from '../../assets/shared/mobile/image-best-gear.jpg'
import aboutImageTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import aboutImageDesktop from '../../assets/shared/desktop/image-best-gear.jpg'

export const AboutSectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 10rem 0;

	${screenSize.md`
    margin: 7rem 0;
  `}

	${screenSize.xmd`
		flex-direction: row-reverse;
    justify-content: space-between;
  `}

	& > * {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		${screenSize.xmd`
		align-items: start;
  `}
	}
`
export const ImageContainer = styled.div`
	width: 100%;
	min-height: 30rem;
	background-image: url(${aboutImageMobile});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: var(--radius);

	${screenSize.sm`
		background-size: contain;
  `}

	${screenSize.md`
		min-height: 22rem;
		background-image: url(${aboutImageTablet});
		background-size: cover;
		background-position: center;
  `}

	${screenSize.xmd`
    max-width: 50%;
		min-height: 37rem;
		background-image: url(${aboutImageDesktop});
  `}
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	${screenSize.xmd`
    max-width: 50%;
		text-align: left;
  `}
`
export const ContentHeading = styled.div`
	text-transform: uppercase;
	font-size: 2.8rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	margin: 3.5rem auto 3rem;
	span {
		color: var(--color-main-normal);
	}
	@media (min-width: 411px) {
		max-width: 85%;
	}
	${screenSize.sm`
    max-width: 75%;
		font-size: 2.4rem;
		line-height: 2.6rem;
  `}
	${screenSize.md`
    max-width: 70%;
		line-height: 2.6rem;
  `}
	${screenSize.xmd`
		max-width: 80%;
		margin: 0 0 3rem;
		font-size: 2.3rem;
		line-height: 2.4rem;
		font-weight: 700;
  `}
`
export const ContentDescription = styled.p`
	font-size: 1.5rem;
	line-height: 2.3rem;
	color: var(--color-gray-800);
	font-weight: 400;
	opacity: 0.65;

	${screenSize.sm`
		font-size: 1.2rem;
		line-height: 1.8rem;
  `}

	${screenSize.md`
		font-size: 1.1rem;
		max-width: 90%;
  `}

	${screenSize.xmd`
		font-size: 0.95rem;
		line-height: 1.5rem;
		font-weight: 500;
		max-width: 81%;
  `}
`
