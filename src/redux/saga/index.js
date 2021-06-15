import { all } from 'redux-saga/effects';
import study from './study';

function* rootSaga(){
  yield all([
    ...study,
  ])
}

export default rootSaga;
