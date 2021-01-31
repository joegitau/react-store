import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({ productList: productListReducer });
const middlewares = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
