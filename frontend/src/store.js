import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productListReducer, productDetailsListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsListReducer,
  cart: cartReducer,
});

const middlewares = [thunk];

// fetch cart state from localstorage
const storedCartState = JSON.parse(localStorage.getItem('cartItems'));
const cartFromLocalstorage = storedCartState ? storedCartState : [];

const initialState = {
  cart: { cartItems: cartFromLocalstorage }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
