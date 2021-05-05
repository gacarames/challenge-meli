import * as types from '../actions/actionTypes';

const initial = {
    loading: false,
    results: {},
    error: '',
};

export default (state = initial, action) => {
    const { payload } = action;

    switch (action.type) {
        case types.FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                results: payload,
                error: '',
            };
        case types.FETCH_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case types.RESET_SEARCH:
            return {
                ...initial,
            };

        default:
            return state;
    }
};
