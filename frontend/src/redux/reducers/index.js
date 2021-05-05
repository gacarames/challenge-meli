import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import productReducer from './productReducer';

const rootReducers = combineReducers({
    search: searchReducer,
    product: productReducer,
});

export default rootReducers;
