import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { GlobalStyles } from './globalStyles'
import EarphonesPage from './pages/earphones/EarphonesPage'
import HeadphonesPage from './pages/headphones/HeadphonesPage'
import Homepage from './pages/homepage/Homepage'
import SpeakersPage from './pages/speakers/SpeakersPage'

function App() {
	return (
		<div className='App'>
			<Router>
				<GlobalStyles />
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/headphones' component={HeadphonesPage} />
					<Route path='/speakers' component={SpeakersPage} />
					<Route path='/earphones' component={EarphonesPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
