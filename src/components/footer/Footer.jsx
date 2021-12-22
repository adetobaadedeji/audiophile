import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import { links } from '../../utils/routeData'
import { categoryData } from '../../utils/categoryData'
import logo from '../../assets/shared/desktop/logo.svg'
import { CopyrightContainer, FooterBottom, FooterContainer, FooterContent, FooterDescription, FooterMain, FooterMenuContainer, FooterNav, Image, LogoContainer, MenuLink, SocialLink, SocialsContainer } from './Footer.styles'

const Footer = () => {
	const { footer, socials } = categoryData
	
	return (
		<FooterContainer>
			<SectionContainer>
				<FooterContent>
					<FooterNav>
						<LogoContainer to='/' onClick={() => window.scrollTo(0, 0)}>
							<Image src={logo} alt='audiphile logo' />
						</LogoContainer>
						<FooterMenuContainer>
							{links.map(({ id, text, url }) => (
								<MenuLink
									exact
									key={id}
									to={url}
									activeClassName='active'
									//if the location does not change, this function will sroll the page up on clicking the Link
									onClick={() => window.scrollTo(0, 0)}
								>
									{text}
								</MenuLink>
							))}
						</FooterMenuContainer>
					</FooterNav>
					<FooterMain>
						<FooterDescription>{footer.info}</FooterDescription>
					</FooterMain>
					<FooterBottom>
						<CopyrightContainer>{footer.copyright}</CopyrightContainer>
						<SocialsContainer>
							{socials.map((social, index) => (
								<SocialLink
									key={index}
									href={social.link}
									arial-label={social.label}
								>
									{social.icon}
								</SocialLink>
							))}
						</SocialsContainer>
					</FooterBottom>
				</FooterContent>
			</SectionContainer>
		</FooterContainer>
	)
}

export default Footer
