import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// 移动端修复点击延迟
import FastClick from 'fastclick';

// 多语言
import intl from 'react-intl-universal';
import { locales, suppoerLocales } from '@locales/index.js';

// antd-mobile
import { Toast } from 'antd-mobile';

// react-redux
import { Provider } from 'react-redux';
import store from '@redux/store.js';

// 引入各页面 route
import ErrorBoundary from '@component/error-boundary/index.js'; // 内部异常捕获边界
import RouterGuard from './router_guard.js';
import study from './study.js';
import hook from './hook.js';

const routes = [
  {
    exact: true,
    strict: true,
    path: '/',
    component: lazy(() => import(/* webpackChunkName: 'index' */ '@pages/home/index.tsx')),
    meta: { auth: false, title: '首页' }
  },
  ...study,
  ...hook,
  {
    path: '/error',
    component: lazy(() => import(/* webpackChunkName: 'error' */ '@pages/error/index.tsx')),
    meta: { auth: false, title: '404' }
  },
]

// antd-mobile 全局配置
Toast.config({ duration: 0, mask: true })

// 多语言 - common locale data
// require('intl/locale-data/jsonp/en.js');
// require('intl/locale-data/jsonp/zh.js');

// 当浏览器不支持 HTML5 的 history API 时强制刷新页面
const supportsHistory = 'pushState' in window.history;

class App extends React.Component {
  state = {
    initDone: false
  }

  componentDidMount() {
    this.fastclick();
    this.loadLocales();
  }

  fastclick() {
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);

        FastClick.prototype.focus = function(targetElement) {
          let deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0;
          let deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
          let length;
          // 兼容处理:在iOS7中，有一些元素（如date、datetime、month等）在setSelectionRange会出现TypeError
          // 这是因为这些元素并没有selectionStart和selectionEnd的整型数字属性，所以一旦引用就会报错，因此排除这些属性才使用setSelectionRange方法
          if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
            /* 修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘 */
            targetElement.focus();
          } else {
            targetElement.focus();
          }
        };
      }, false);
    }
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
      localStorageLocaleKey: 'lang'
    });

    // 如果没找到，则默认为汉语
    if (!suppoerLocales.some(val => val.value == currentLocale)) {
      currentLocale = 'zh-CN';
    }

    intl.init({
      currentLocale,
      locales: {
        [currentLocale]: locales[currentLocale]
      }
    })
    .then(() => {
      this.setState({ initDone: true });
    });
  }

  render() {
    return (
      this.state.initDone && (
        <ErrorBoundary>
          <Provider store={store}>
            <Router /* basename='/build' */ forceRefresh={!supportsHistory}>
              <Suspense fallback={<div>{/* Loading... */}</div>}>
                <Switch>
                  {/* 用了Switch 这里每次只匹配一个路由，只有一个节点。 */}
                  {
                    routes.map((route, index) => {
                      return (
                        <Route key={index} exact={route.exact} strict={route.strict} path={route.path} render={props => (
                          <RouterGuard {...props} {...route} />
                        )}
                        />
                      )
                    })
                  }
                  <Redirect from='*' to='/error' />
                </Switch>
              </Suspense>
            </Router>
          </Provider>
        </ErrorBoundary>
      )
    );
  }
}

export default App;
