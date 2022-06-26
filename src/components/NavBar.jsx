import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBlack from '../images/logo-black.png';
import logoWhite from '../images/logo-white.png';
import Cart from './Cart';

function NavBar() {
  const [showCart, setShowCart] = useState(true);
  let location = useLocation();
  const route = location.pathname === '/' ? 'home' : 'products';
  const navClass = route === 'home' ? 'navbar' : 'navbar page';

  const toggleCart = () => {
    setShowCart(!showCart);
  };

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
        <div className='toggle-container'>
          <button onClick={toggleCart} className='toggle-cart'>
            <i className='fa fa-shopping-cart'></i>
          </button>
          <span className='cart-item-count'>1</span>
        </div>
        {/* cart */}
        {showCart ? <Cart /> : null}
      </div>
    </nav>
  );
}

export default NavBar;
