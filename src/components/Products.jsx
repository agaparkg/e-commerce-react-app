import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PageHero from './PageHero';
import SingleProduct from './SingleProduct';

function Products() {
  const [priceInputVal, setPriceInputVal] = useState(50);
  let location = useLocation();

  const products = useSelector((store) => store.productsState.products);

  const filteredProducts = products.filter((p) => {
    return (p.fields.price / 100).toFixed(2) < Number(priceInputVal);
  });

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInputVal(+value);
  };

  return (
    <>
      <PageHero path={location.pathname} />
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
                onChange={() => {}}
              />
            </form>
            {/* categories */}
            <h4>Company</h4>
            <article className='companies'>
              <button className='company-btn'>all</button>
              <button className='company-btn'>ikea</button>
            </article>
            {/* price */}
            <h4>
              Price <span>${priceInputVal}</span>
            </h4>
            <form className='price-form'>
              <input
                type='range'
                className='price-filter'
                min='0'
                value={priceInputVal}
                max='100'
                onChange={handlePriceChange}
              />
            </form>
            <p className='price-value'></p>
          </div>
        </div>
        {/* products */}
        <div className='products-container'>
          {filteredProducts.map((fp) => {
            return <SingleProduct fp={fp} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
