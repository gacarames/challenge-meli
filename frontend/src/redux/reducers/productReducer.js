import * as types from '../actions/actionTypes';

const initial = {
    loading: false,
    item: {},
    error: '',
};

export default (state = initial, action) => {
    const { payload } = action;

    switch (action.type) {
        case types.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                item: payload.item,
                error: '',
            };
        case types.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case types.RESET_PRODUCT:
            return {
                ...initial,
            };

        default:
            return state;
    }
};
