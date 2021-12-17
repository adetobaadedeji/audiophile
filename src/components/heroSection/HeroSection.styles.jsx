import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import mobileBackground from '../../assets/home/mobile/image-header.jpg'
import tabletBackground from '../../assets/home/tablet/image-header.jpg'
import desktopBackground from '../../assets/home/desktop/image-hero.jpg'

export const HeroContainer = styled.section`
	width: 100%;
	/* height: 51rem; */
	height: 56rem;

	${screenSize.sm`
		height: 51rem;
	`}

	// Do not touch or adjust
	${screenSize.md`
		height: 49rem;
	`}

	// Do not touch too
	${screenSize.xmd`
			height: 47rem;
	`}

	background-color: var(--color-gray-700);
	color: var(--color-gray-200);
`
export const HeroContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${mobileBackground});
	background-repeat: no-repeat;
	/* background-size: cover; */
	background-size: 100%;
	background-position: center ;
	padding-top: 80px;

	@media (min-width: 430px) {
		background-size: cover;
		background-position: 0px -1rem;
	}

	@media (min-width: 433px) {
		background-position: 0px -2rem;
	}

	@media (min-width: 435px) {
		background-position: 0px -3rem;
	}

	@media (min-width: 440px) {
		background-position: 0px -7rem;
	}

	@media (min-width: 479px) {
		background-position: 0px -5rem;
	}

	@media (min-width: 481px) {
		background-position: 0px -2rem;
	}

	@media (min-width: 500px) {
		background-image: url(${tabletBackground});
		background-size: cover;
		background-position: center;
	}

	@media (min-width: 768px) {
		background-position: 0px 1rem;
		background-size: 100%;
	}

	@media (min-width: 777px) {
		background-position: 0px -1rem;
	}

	@media (min-width: 800px) {
		background-position: 0px -2rem;
	}

	@media (min-width: 875px) {
		background-position: 0px -3.5rem;
	}

	${screenSize.xmd`
		background-image: url(${desktopBackground});
		background-size: cover;
		background-position: -16rem 0rem;
	`}

	@media (min-width: 1000px) {
		background-position: -14rem 0rem;
	}

	${screenSize.lg`
		background-position: -15rem 0rem;
	`}

	@media (min-width: 1031px) {
		background-position: -16rem 0rem;
	}

	@media (min-width: 1045px) {
		background-position: -15rem 0rem;
	}

	@media (min-width: 1055px) {
		background-position: -14rem 0rem;
	}

	@media (min-width: 1075px) {
		background-position: -13rem 0rem;
	}

	@media (min-width: 1115px) {
		background-position: -11rem 0rem;
	}

	@media (min-width: 1150px) {
		background-position: -9rem 0rem;
	}

	@media (min-width: 1175px) {
		background-position: -7rem 0rem;
	}

	@media (min-width: 1200px) {
		background-position: -6rem 0rem;
	}

	@media (min-width: 1205px) {
		background-position: -5rem 0rem;
	}

	${screenSize.xl`
    background-position: -5rem 0rem;
	`};

	@media (min-width: 1466px) {
		background-position: 0rem 0rem;
	}
`
