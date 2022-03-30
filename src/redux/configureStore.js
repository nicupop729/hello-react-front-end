import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetReducer from './greetings';

const rootReducer = combineReducers({
  greetReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
