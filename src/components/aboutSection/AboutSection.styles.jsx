import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
// import ManWithEarphone from '../../assets/shared/man-headerphone.png'
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
    // gap: 2rem;
    justify-content: space-between;
  `}
`
export const ImageContainer = styled.div`
	width: 100%;
	min-height: 26rem;
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
	font-size: 2.5rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	margin: 3.5rem auto 3rem;

	span {
		color: var(--color-main-normal);
	}
	${screenSize.sm`
    max-width: 70%;
  `}
	${screenSize.xmd`
		max-width: 75%;
		margin: 0 0 3rem;
		font-size: 2.3rem;
		line-height: 2.4rem;
		font-weight: 700;
  `}
`
export const ContentDescription = styled.div`
	font-size: 1.3rem;
	line-height: 2rem;
	color: var(--color-gray-800);
	font-weight: 400;
	opacity: 0.65;

	${screenSize.xmd`
  font-size: 0.95rem;
	line-height: 1.5rem;
  max-width: 81%;
  `}
`
