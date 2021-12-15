import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { GlobalStyles } from './globalStyles'
import Homepage from './pages/homepage/Homepage'

function App() {
	return (
		<div className='App'>
			<Router>
				<GlobalStyles />
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage}/>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
