const SingleProduct = () => {
  return (
    <article className='product'>
      <div className='product-container'>
        <img src='./images/main-bcg.jpeg' className='product-img img' alt='' />

        <div className='product-icons'>
          <a href='product.html?id=1' className='product-icon'>
            <i className='fas fa-search'></i>
          </a>
          <button className='product-cart-btn product-icon' data-id='1'>
            <i className='fas fa-shopping-cart'></i>
          </button>
        </div>
      </div>
      <footer>
        <p className='product-name'>name</p>
        <h4 className='product-price'>$9.99</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
