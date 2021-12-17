import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import zx7Mobile from '../../assets/home/mobile/image-speaker-zx7.jpg'
import zx7Tablet from '../../assets/home/tablet/image-speaker-zx7.jpg'
import zx7Desktop from '../../assets/home/desktop/image-speaker-zx7.jpg'

export const SpeakerContainer = styled.div`
	min-height: 30rem;
	background-color: var(--color-gray-300);
	background-image: url(${zx7Mobile});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: var(--radius);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.5rem;
	text-align: left;
	padding: 2rem;
  margin: 2rem 0;

	${screenSize.sm`
    min-height: 24rem;
  `}

	${screenSize.md`
    min-height: 21rem;
    background-image: url(${zx7Tablet});
    background-size: cover;
    gap: 2rem;
    padding: 3.5rem;
    margin: 2.2rem 0;
  `}
	${screenSize.xmd`
    min-height:19rem;
    background-size: cover;
    background-image: url(${zx7Desktop});
    gap: 1.2rem;
    padding: 5rem;
  `}
`
export const SpeakerHeading = styled.h2`
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
