import { createReducer } from './createReducer.js';

const prefix = 'STUDY';
const GET = `GET_${prefix}`;
const GET_SUCESS = `GET_${prefix}_SUCESS`;
const GET_FAILED = `GET_${prefix}_FAILED`;

// action
export const getStudy = () => ({
  type: GET,
});

export const getStudySucess = (articles) => ({
  type: GET_SUCESS,
  articles,
});

export const getStudyFailed = (error) => ({
  type: GET_FAILED,
  error,
});

// ts
export interface StudyState {
  loading: boolean,
  articles: any[],
  error: string,
}

const init = {
  loading: false,
  articles: [],
  error: '',
};

export default createReducer(init, {
  [GET](state) {
    return {
      ...state,
      loading: true,
     };
  },
  [GET_SUCESS](state, payload) {
    return {
      ...state,
      loading: false,
      articles: payload.articles,
    };
  },
  [GET_FAILED](state, payload) {
    return {
      ...state,
      loading: false,
      articles: [],
      error: payload.error,
    };
  }
});
