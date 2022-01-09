import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { screenSize } from '../globalStyles'
import Error404 from '../assets/shared/404.png'
import SectionContainer from './sectionContainer/SectionContainer'

const ErrorPage = () => {
  return (
		<SectionContainer>
			<ErrorPageContainer>
				<ImageContainer>
					<Image src={Error404} alt=''></Image>
				</ImageContainer>
				<Content>
					<Header>404</Header>
					<Text>
						Sorry, we can't find that page! <br/> Don't worry though, everything is
						STILL AWESOME!
					</Text>
					<Button to='/'>Start shopping &#62; </Button>
				</Content>
			</ErrorPageContainer>
		</SectionContainer>
	)
}

export default ErrorPage

const ErrorPageContainer = styled.section`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px auto;

	${screenSize.xmd`
    flex-direction: row;
  `}
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  width: 12rem;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.h1`
  font-size: 10rem;
  line-height: 12rem;
  color: var(--color-main-normal);
`
const Text = styled.p`
  font-size: 1.5rem;
  color: var(--color-gray-600);
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
  letter-spacing: 0.05rem;
`
const Button = styled(Link)`
	background-color: var(--color-main-normal);
	color: var(--color-white);
	padding: 1.5rem 1.8rem;
	border-radius: var(--radius-2);
	font-size: 1.3rem;
  text-transform: uppercase;
	font-weight: 600;
	text-decoration: none;
	margin-top: 20px;
  letter-spacing: 0.25rem;

	&:hover {
		background-color: var(--color-main-dark);
	}
`