import api from '../../api';
import * as types from './actionTypes';

export const resetSearch = () => (dispatch) => dispatch({ type: types.RESET_SEARCH });

export const fetchSearchRequest = () => {
    return {
        type: types.FETCH_SEARCH_REQUEST,
    };
};

export const fetchSearchSuccess = (results) => {
    return {
        type: types.FETCH_SEARCH_SUCCESS,
        payload: results,
    };
};

export const fetchSearchFailure = (error) => {
    return {
        type: types.FETCH_SEARCH_FAILURE,
        payload: error,
    };
};

const fetchSearch = (query) => async (dispatch) => {
    dispatch(fetchSearchRequest());
    api.get(`/items?q=${query}`)
        .then((res) => {
            dispatch(fetchSearchSuccess(res.data));
        })
        .catch((error) => {
            dispatch(fetchSearchFailure(error));
        });
};

export default fetchSearch;
