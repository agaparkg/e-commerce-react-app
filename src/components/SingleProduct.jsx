import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/utils';

const SingleProduct = ({ fp }) => {
  return (
    <article className='product'>
      <div className='product-container'>
        <img src={fp.fields.image[0].url} className='product-img img' alt='' />

        <div className='product-icons'>
          <Link to={`/products/${fp.id}`} className='product-icon'>
            <i className='fa fa-search'></i>
          </Link>
          <button className='product-cart-btn product-icon' data-id='1'>
            <i className='fa fa-shopping-cart'></i>
          </button>
        </div>
      </div>
      <footer>
        <p className='product-name'>
          {fp.fields.name} ({fp.fields.company})
        </p>
        <h4 className='product-price'>{formatPrice(fp.fields.price)}</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
