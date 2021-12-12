import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import PatternCircle from '../../assets/home/desktop/pattern-circles.svg'


export const SpeakerContainer = styled.div`
	width: 100%;
	margin: 6rem auto;
	padding: 5rem 0;
	min-height: 37.5rem;
	background-color: var(--color-main-normal);
	background-image: url(${PatternCircle});
	background-repeat: no-repeat;
	background-size: 47rem auto;
	background-position: center -10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: var(--radius);
	overflow: hidden;

	${screenSize.sm`
    margin: 1rem auto;
  `}

	${screenSize.xmd`
    margin: 3rem auto;
    flex-direction: row;
		padding:  0;
		min-height: 33rem;
		background-size: 50rem auto;
		background-position: -8rem -2rem;
  `}
	${screenSize.xl`
		background-size: 55rem auto;
  `}
`
export const ImageContainer = styled.div`
	${screenSize.xmd`
			flex: 4;
			display: flex;
			justify-content: center;
			margin-bottom: -7.5rem;
  `}
`

export const PageContainer = styled.div`
	${screenSize.xmd`
			flex: 3;
			display: flex;
  `}
`

export const SpeakerImage = styled.img`
	height: 16rem;
	margin-bottom: 2.5rem;

	${screenSize.xmd`
		height: 27rem;
		margin-bottom: 0;
  `}
`