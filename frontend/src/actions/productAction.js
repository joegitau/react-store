import axios from 'axios';
import * as actionTypes from '../actionTypes/productTypes';

export const listOfProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });

    // fetch products
    const { data } = await axios('/api/products');
    dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOfProductDetails = id => async dispatch => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });

    // fetch product details
    const { data } = await axios(`/api/products/${id}`);
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
