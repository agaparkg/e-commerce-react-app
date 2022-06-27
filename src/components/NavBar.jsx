import { useLocation } from 'react-router-dom';
import logoBlack from '../images/logo-black.png';
import logoWhite from '../images/logo-white.png';
import Cart from './Cart';
import CartIcon from './CartIcon';
import NavBarLinks from './NavBarLinks';
import SideBar from './SideBar';

function NavBar() {
  let location = useLocation();
  const route = location.pathname === '/' ? 'home' : 'products';
  const navClass = route === 'home' ? 'navbar' : 'navbar page';

  return (
    <nav className={navClass}>
      <div className='nav-center'>
        {/* side-bar */}
        <SideBar />
        {/* links */}
        <NavBarLinks />
        {/* logo */}
        <img
          src={route === 'home' ? logoWhite : logoBlack}
          className='nav-logo'
          alt='logo'
        />
        {/* cart icon */}
        <CartIcon />
        {/* cart */}
        <Cart />
      </div>
    </nav>
  );
}

export default NavBar;
