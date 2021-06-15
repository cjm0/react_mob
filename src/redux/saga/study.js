import { takeEvery, call, put } from 'redux-saga/effects'
import {
  getStudySucess,
  getStudyFailed,
} from '@redux/reducer/study';

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'saga'
        }
      ])
    }, 1000)
  })
}

function* fetchUser() {
  try {
    const data = yield call(delay)
    yield put(getStudySucess(data));
  } catch (e) {
    yield put(getStudyFailed(e.message));
  }
}

function* getStudy() {
  yield takeEvery('GET_STUDY', fetchUser);
}

const study = [
  getStudy(),
]

export default study;
