import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { displayCart } from '../features/products/productsSlice';
import logoBlack from '../images/logo-black.png';
import logoWhite from '../images/logo-white.png';
import Cart from './Cart';

function NavBar() {
  const dispatch = useDispatch();
  let location = useLocation();
  const route = location.pathname === '/' ? 'home' : 'products';
  const navClass = route === 'home' ? 'navbar' : 'navbar page';

  const toggleCart = () => {
    dispatch(displayCart());
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
        <Cart />
      </div>
    </nav>
  );
}

export default NavBar;
