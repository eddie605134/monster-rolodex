import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../firebase/firebase.utils.js'

import ShopIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (<>
    <div className="navigation">
      <Link className='logo-container' to='/'>
        <CrwnLogo className="logo" />
      </Link>
      
      <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>shop</Link>
        {
          currentUser 
            ? <span className="nav-link" onClick={signOutUser}>sign out</span>
            : <Link className="nav-link" to='/auth'>sign in</Link>
        }
        <ShopIcon></ShopIcon>
      </div>
      { isCartOpen && <CartDropdown /> }
    </div>
    <Outlet></Outlet>
  </>)
}

export default Navigation