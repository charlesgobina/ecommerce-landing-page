import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const reducer = combineReducers({
});

const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
