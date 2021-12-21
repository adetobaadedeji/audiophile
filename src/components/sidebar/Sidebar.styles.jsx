import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'

export const SidebarContainer = styled.aside`
	background-color: var(--color-white);
	transition: var(--transition);
	transform: translateX(-100vw);
	${({ toggleState }) =>
		toggleState &&
		css`
			transform: translateX(0px);
			box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.6);
		`}
	position: absolute;
	top: 5.3rem;
	left: 0;
	right: 0;
	z-index: 999;
	/* overflow: auto; */
	border-radius: 0 0 10px 10px;

	${screenSize.md`
    max-height: 18rem;
  `}

	${screenSize.xmd`
    display: none
  `}
`