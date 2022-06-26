import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../features/products/productsSlice';

function Cart() {
  const dispatch = useDispatch();
  const showCart = useSelector((store) => store.productsState.showCart);
  const showClass = showCart ? 'cart-overlay show' : 'cart-overlay';

  const toggleCart = () => {
    dispatch(displayCart());
  };

  return (
    <div className={showClass}>
      <aside className='cart'>
        <button onClick={toggleCart} className='cart-close'>
          <i className='fa fa-times'></i>
        </button>
        <header>
          <h3 className='text-slanted'>your bag</h3>
        </header>
        {/* cart items */}
        <div className='cart-items'></div>
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
