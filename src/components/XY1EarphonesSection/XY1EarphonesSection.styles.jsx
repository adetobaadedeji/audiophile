import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import EarphoneMobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import EarphoneTablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import EarphoneDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg'

export const EarphoneContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.2rem;

	${screenSize.md`
    flex-direction: row;
    gap: 1rem;
  `}

	${screenSize.xmd`
    gap: 1.5rem;
  `}
`
export const ImageContainer = styled.div`
	min-height: 18rem;
	border-radius: var(--radius);
	background-image: url(${EarphoneMobile});
	background-repeat: no-repeat;
	background-size: cover;

	${screenSize.md`
    width: 50%;
    min-height: 22rem;
    background-image: url(${EarphoneTablet});
  `}

	${screenSize.xmd`
    min-height: 20rem;
    background-image: url(${EarphoneDesktop});
  `}
`
export const ContentContainer = styled.div`
	min-height: 18rem;
	border-radius: var(--radius);
	background-color: var(--color-gray-300);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.5rem;

	${screenSize.md`
    width: 50%;
    min-height: 22rem;
  `}

	${screenSize.xmd`
    min-height: 20rem;
    padding-left: 4.5rem;
    gap: 1.2rem;
  `}
`

export const EarphoneHeading = styled.h2`
	text-transform: uppercase;
	font-size: 2.8rem;
	line-height: 3rem;
	letter-spacing: 0.08rem;

	${screenSize.md`
    font-size: 2rem;
  `}
`
export const ButtonContainer = styled.div`
	display: flex;
`
