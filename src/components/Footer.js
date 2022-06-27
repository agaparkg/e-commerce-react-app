import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/utils';

function Footer() {
  const cartProducts = useSelector((store) => store.productsState.cartProducts);
  const totalCartPrice = cartProducts.reduce(
    (sum, item) => sum + item.count * item.fields.price,
    0
  );

  return (
    <footer>
      <h3 className='cart-total text-slanted'>
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button className='cart-checkout btn'>checkout</button>
    </footer>
  );
}

export default Footer;
