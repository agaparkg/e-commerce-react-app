import SingleProduct from './SingleProduct';

function Home() {
  return (
    <>
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
          <SingleProduct />
        </div>
        <a href='products.html' className='btn'>
          all products
        </a>
      </section>
    </>
  );
}

export default Home;
