import { useLocation } from 'react-router-dom';

function Products() {
  let location = useLocation();
  console.log('products', location);
  return (
    <>
      <section class='page-hero'>
        <div class='section-center'>
          <h3 class='page-hero-title'>Home / Products</h3>
        </div>
      </section>
      <section className='products'>
        {/* filters */}
        <div className='filters'>
          <div className='filters-container'>
            {/* search */}
            <form className='input-form'>
              <input
                type='text'
                className='search-input'
                placeholder='search...'
              />
            </form>
            {/* categories */}
            <h4>Company</h4>
            <article className='companies'>
              <button className='company-btn'>all</button>
              <button className='company-btn'>ikea</button>
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className='price-form'>
              <input
                type='range'
                className='price-filter'
                min='0'
                value='50'
                max='100'
                onChange={() => {}}
              />
            </form>
            <p className='price-value'></p>
          </div>
        </div>
        {/* products */}
        <div className='products-container'></div>
      </section>
    </>
  );
}

export default Products;
