import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addToCart } from '../actions/cartActions';

const Cart = ({ match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
      console.log(productId)

      if (typeof productId !== 'undefined') {
          dispatch(addToCart(productId, qty));
      }
    
  }, [dispatch, productId, qty]);

  return (
    <>
      <p>Cart here!</p>
    </>
  );
};

export default Cart;
