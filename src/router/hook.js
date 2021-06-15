import { lazy } from 'react';

const hook = [
  {
    path: '/hook',
    component: lazy(() => import(/* webpackChunkName: 'hook' */ '@pages/hook/index')),
    meta: { auth: false, title: 'hook 练习项目' }
  },
]

export default hook;
