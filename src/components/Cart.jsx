function Cart() {
  return (
    <div className='cart-overlay'>
      <aside className='cart'>
        <button className='cart-close'>
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
