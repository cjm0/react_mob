import { lazy } from 'react';

const study = [
  {
    path: '/study',
    component: lazy(() => import(/* webpackChunkName: 'study' */ '@pages/study/index')),
    meta: { auth: false, title: '练习项目' }
  },
]

export default study;
