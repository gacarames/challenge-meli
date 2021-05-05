import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
