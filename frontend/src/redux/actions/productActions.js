import api from '../../api';
import * as types from './actionTypes';

export const resetProduct = () => (dispatch) => dispatch({ type: types.RESET_PRODUCT });

export const fetchProductRequest = () => {
    return {
        type: types.FETCH_PRODUCT_REQUEST,
    };
};

export const fetchProductSuccess = (results) => {
    return {
        type: types.FETCH_PRODUCT_SUCCESS,
        payload: results,
    };
};

export const fetchProductFailure = (error) => {
    return {
        type: types.FETCH_PRODUCT_FAILURE,
        payload: error,
    };
};

const fetchProduct = (id) => async (dispatch) => {
    dispatch(fetchProductRequest());
    api.get(`/items/${id}`)
        .then((res) => {
            dispatch(fetchProductSuccess(res.data));
        })
        .catch((error) => {
            dispatch(fetchProductFailure(error));
        });
};

export default fetchProduct;
