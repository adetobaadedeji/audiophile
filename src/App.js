import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
import CheckoutPage from './pages/checkout/CheckoutPage'
import CheckoutModal from './components/checkoutModal/CheckoutModal'
import {
	isCartOpenSelector,
	isMenuOpenSelector,
	isCheckoutOpenSelector,
} from './redux/uiToggle/uiToggleSlice'

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
	{
		path: '/checkout',
		component: CheckoutPage,
	},
]

function App() {
	const isCartOpen = useSelector(isCartOpenSelector)
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const isCheckoutOpen = useSelector(isCheckoutOpenSelector)

	useEffect(() => {
		if(isCartOpen || isMenuOpen || isCheckoutOpen){
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'initial'
		}
	}, [isCartOpen, isMenuOpen, isCheckoutOpen])


	return (
		<Router>
			<ScrollToTop />
			<GlobalStyles />
			<Header />
			<CheckoutModal />
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
