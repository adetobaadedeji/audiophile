import zx9Mobile from '../assets/home/mobile/image-speaker-zx9.png'
import zx9Tablet from '../assets/home/tablet/image-speaker-zx9.png'
import zx9Desktop from '../assets/home/desktop/image-speaker-zx9.png'

export const homeData = {
	hero: {
		mainHeading: 'XX99 mark II headphones',
		topHeading: 'new product',
		description:
			'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
		button: {
			title: 'see product',
			link: '/product/xx99-mark-two-headphones',
		},
	},
	sectionTwo: {
		mainHeading: 'ZX9 speaker',
		zx9: 'zx9',
		description:
			'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
		button: {
			title: 'see product',
			link: '/product/zx9-speaker',
			black: 'black',
		},
		image: {
			mobile: zx9Mobile,
			tablet: zx9Tablet,
			desktop: zx9Desktop,
			alt: 'zx9 speaker',
		},
	},
	sectionThree: {
		mainHeading: 'zx7 speaker',
		button: {
			title: 'see product',
			link: '/product/zx7-speaker',
			inverted: 'inverted',
		},
	},
	sectionFour: {
		mainHeading: 'yx1 earphones',
		button: {
			title: 'see product',
			link: '/product/yx1-earphones',
			inverted: 'inverted',
		},
	},
}
