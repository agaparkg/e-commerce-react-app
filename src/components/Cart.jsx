import { useDispatch, useSelector } from 'react-redux';
import {
  displayCart,
  removeProductFromCart,
} from '../features/products/productsSlice';
import { formatPrice } from '../utils/utils';

function Cart() {
  const dispatch = useDispatch();
  const showCart = useSelector((store) => store.productsState.showCart);
  const showclassName = showCart ? 'cart-overlay show' : 'cart-overlay';
  const cartProducts = useSelector((store) => store.productsState.cartProducts);

  const toggleCart = () => {
    dispatch(displayCart());
  };

  return (
    <div className={showclassName}>
      <aside className='cart'>
        <button onClick={toggleCart} className='cart-close'>
          <i className='fa fa-times'></i>
        </button>
        <header>
          <h3 className='text-slanted'>your bag</h3>
        </header>
        {/* cart items */}
        <div className='cart-items'>
          {cartProducts.map((cp) => {
            console.log('hhh---', cp);
            const { name, image, price } = cp.fields;
            return (
              <article className='cart-item' data-id={cp.id}>
                <img
                  src={image[0].thumbnails.large.url}
                  className='cart-item-img'
                  alt='high-back bench'
                />
                <div>
                  <h4 className='cart-item-name'>{name}</h4>
                  <p className='cart-item-price'>{formatPrice(price)}</p>
                  <button
                    onClick={() => dispatch(removeProductFromCart(cp.id))}
                    className='cart-item-remove-btn'
                    data-id={cp.id}
                  >
                    remove
                  </button>
                </div>

                <div>
                  <button className='cart-item-increase-btn' data-id={cp.id}>
                    <i className='fas fa-chevron-up'></i>
                  </button>
                  <p className='cart-item-amount' data-id={cp.id}>
                    1
                  </p>
                  <button className='cart-item-decrease-btn' data-id={cp.id}>
                    <i className='fas fa-chevron-down'></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {/* footer */}
        <footer>
          <h3 className='cart-total text-slanted'>total : $12.99</h3>
          <button className='cart-checkout btn'>checkout</button>
        </footer>
      </aside>
    </div>
  );
}

export default Cart;
