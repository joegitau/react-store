import * as actionTypes from "../actionTypes/productTypes";

const productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, product: [] };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
