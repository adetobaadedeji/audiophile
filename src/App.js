import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import SideMenu from './components/sideMenu/SideMenu'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import { GlobalStyles } from './globalStyles'
import EarphonesPage from './pages/earphones/EarphonesPage'
import HeadphonesPage from './pages/headphones/HeadphonesPage'
import Homepage from './pages/homepage/Homepage'
import ProductPage from './pages/product/ProductPage'
import SpeakersPage from './pages/speakers/SpeakersPage'
import CartModal from './components/cartModal/CartModal'

const routes = [
	{
		path: '/',
		exact: true,
		component: Homepage,
	},
	{
		path: '/headphones',
		component: HeadphonesPage,
	},
	{
		path: '/speakers',
		component: SpeakersPage,
	},
	{
		path: '/earphones',
		component: EarphonesPage,
	},
	{
		path: '/product/:productId',
		component: ProductPage,
	},
]

function App() {
	return (
		<Router>
			<ScrollToTop />
			<GlobalStyles />
			<Header />
			<CartModal />
			<SideMenu />
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))}
			</Switch>
			<Footer />
			<ToastContainer />
		</Router>
	)
}

export default App
