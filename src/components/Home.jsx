import { Link } from 'react-router-dom';
import logWhite from '../images/logo-white.png';

function Home() {
  return (
    <>
      {/* navbar */}
      <nav className='navbar'>
        <div className='nav-center'>
          {/* links */}
          <div>
            <button className='toggle-nav'>
              <i className='fas fa-bars'></i>
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
          <img src={logWhite} className='nav-logo' alt='logo' />
          {/* cart icon */}
          <div className='toggle-container'>
            <button className='toggle-cart'>
              <i className='fas fa-shopping-cart'></i>
            </button>
            <span className='cart-item-count'>1</span>
          </div>
        </div>
      </nav>
      {/* hero */}
      <section className='hero'>
        <div className='hero-container'>
          <h1 className='text-slanted'>rest, relax, unwind</h1>
          <h3>Embrace your choices - we do</h3>
          <a href='products.html' className='hero-btn'>
            show now
          </a>
        </div>
      </section>

      {/* featured products */}
      <section className='section featured'>
        <div className='title'>
          <h2>
            <span>/</span> featured
          </h2>
        </div>
        <div className='featured-center section-center'>
          <h2 className='section-loading'>loading...</h2>
          {/* single product */}
          {/* <article className="product">
          <div className="product-container">
            <img src="./images/main-bcg.jpeg" className="product-img img" alt="" />
           
            <div className="product-icons">
              <a href="product.html?id=1" className="product-icon">
                <i className="fas fa-search"></i>
              </a>
              <button className="product-cart-btn product-icon" data-id="1">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p className="product-name">name</p>
            <h4 className="product-price">$9.99</h4>
          </footer>
        </article> */}
          {/* end of single product */}
        </div>
        <a href='products.html' className='btn'>
          all products
        </a>
      </section>
    </>
  );
}

export default Home;
