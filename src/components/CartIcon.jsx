import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../features/products/productsSlice';

function CartIcon() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.productsState.cartProducts);
  const toggleCart = () => {
    dispatch(displayCart());
  };

  return (
    <div className='toggle-container'>
      <button onClick={toggleCart} className='toggle-cart'>
        <i className='fa fa-shopping-cart'></i>
      </button>
      <span className='cart-item-count'>{cartProducts.length}</span>
    </div>
  );
}

export default CartIcon;
