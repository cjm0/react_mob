import zhCN from './zh-CN.js';
import enUS from './en-US.js';

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const suppoerLocales = [
  {
    name: '简体中文',
    value: 'zh-CN'
  },
  {
    name: 'English',
    value: 'en-US'
  },
  {
    name: '繁體中文',
    value: 'zh-TW'
  },
]

export {
  locales,
  suppoerLocales
}
