import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import itemReducer from './sneakStore';

const reducer = combineReducers({
  itemReducer,
});

const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
