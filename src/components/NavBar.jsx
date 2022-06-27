import { Link, useLocation } from 'react-router-dom';
import logoBlack from '../images/logo-black.png';
import logoWhite from '../images/logo-white.png';
import Cart from './Cart';
import CartIcon from './CartIcon';

function NavBar() {
  let location = useLocation();
  const route = location.pathname === '/' ? 'home' : 'products';
  const navClass = route === 'home' ? 'navbar' : 'navbar page';

  return (
    <nav className={navClass}>
      <div className='nav-center'>
        {/* links */}
        <div>
          <button className='toggle-nav'>
            <i className='fa fa-bars'></i>
          </button>
          <ul className='nav-links'>
            <li>
              <Link to='/' className='nav-link'>
                home
              </Link>
            </li>
            <li>
              <Link to='/products' className='nav-link'>
                products
              </Link>
            </li>
            <li>
              <Link to='/about' className='nav-link'>
                about
              </Link>
            </li>
          </ul>
        </div>
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
