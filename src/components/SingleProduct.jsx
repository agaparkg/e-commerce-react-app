const SingleProduct = ({ fp }) => {
  const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return formattedPrice;
  };

  return (
    <article className='product'>
      <div className='product-container'>
        <img src={fp.fields.image[0].url} className='product-img img' alt='' />

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
        <p className='product-name'>{fp.fields.name}</p>
        <h4 className='product-price'>{formatPrice(fp.fields.price)}</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
