import { ADD_CART_ITEM } from '../actionTypes/cartTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const item = action.payload;

      const itemExists = state.cartItems.find(c => c.product === item.product);

      if (!itemExists) {
        return { ...state, cartItems: [...state.cartItems, item] };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map(c => c.product === itemExists.product ? item : c),
        };
      }
    default:
      return state;
  }
};

// NOTE:
// we have initilized product to represent ID within our cartAction - therefore, 
// find(c => c.product === item.product) is similar to find(c => c.id === item.id)