import axios from 'axios';

import { ADD_CART_ITEM } from '../actionTypes/cartTypes';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = axios(`/api/products/${id}`);

  // dispatch only the properties that a cart requires -> id(product), name, image, price, countInStock & quantity
  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    },
  });

  // store cart in localstorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Note:
// through getState(), we are able to retrieve specified values from our global state tree - in this case, cart.cartItems