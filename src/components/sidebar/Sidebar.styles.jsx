import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'


export const SidebarWrapper = styled.div``

export const SidebarContainer = styled.aside`
	background-color: var(--color-white);
	transition: var(--transition);
	transform: translateX(-100vw);
	${({ toggleState }) =>
		toggleState &&
		css`
			transform: translateX(0px);
			/* box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.6); */
		`}
	position: fixed;
	top: 5.3rem;
	left: 0;
	right: 0;
	z-index: 999;
	overflow: auto;
	border-radius: 0 0 10px 10px;
	max-height: 58rem;

	@media (min-width: 360px) {
		max-height: 65rem;
	}

	${screenSize.sm`
    max-height: 55rem;
	

  `}

	${screenSize.md`
    max-height: 18rem;
		overflow: hidden;

  `}

	${screenSize.xmd`
    display: none
  `}
`

export const SidebarOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 900;
	display: ${({toggleState}) => toggleState ? 'block' : 'none'};
	
`