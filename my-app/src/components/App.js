import Banner from './Banner'
import logo from '../assets/logo.jfif'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import React, {useState} from 'react'

 function App (){
	
	
	const [cart, updateCart] = useState([])
	const [isOpen, setIsOpen] = useState(true)
	

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>Life Kick's</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
				<ShoppingList cart={cart} updateCart={updateCart} setIsOpen={setIsOpen} />
			</div>
			<Footer />
		</div>
	)
}

export default App