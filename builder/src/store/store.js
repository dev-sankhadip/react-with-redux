import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


// console.log(thunk);
const store=createStore(reducer, applyMiddleware(thunk, logger));

export default store;