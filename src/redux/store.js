import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer/index'; // 同步 action
import rootSaga from './saga/index.js'; // 异步 action
import middleware from './middleware/index.js'; // 自定义中间件

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store
const store = createStore(
  combineReducers(reducer),
  applyMiddleware(...middleware, sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
