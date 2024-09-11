# React 移动端项目

1. react17、create-react-app 脚手架、antd-mobile 移动组件库、兼容 hooks 和 ts 写法

2. axios 请求 proxy 代理跨域

3. 基础配置放在 .env .env.development .env.production 三个文件中

4. flex 布局，不使用 rem

5. fastclick 插件处理 300ms 延迟问题

6. 自定义 eslint 配置规则

## 快速开始

```bash
yarn install

yarn dev // 本地开发

yarn build // 打包上线

yarn test

yarn analyze // 分析 Bundle (包) 大小
```

## 代码说明

1. 全局变量
- $axios RESTful 请求
- $config 全局公共变量
- $cookie 全局 cookie 操作方法

2. 本地缓存 localStorage

## 注意事项

1. less 版本需要在 8 以下：`yarn add less-loader@7.3.0 -D`

2. tsconfig.json 加 `"noImplicitAny": false,` 解决引入非 ts 文件报错

## 版本

`react17.0.2 react-router-dom5.2.0 redux4.1.0 react-redux7.2.4 antd-mobile2.3.4 axios0.21.1 webpack4 babel7`

## 参考文档

[React17](https://reactjs.bootcss.com/)

[react-router-dom](https://reactrouter.com/web/example/basic)

[Create React App](https://www.html.cn/create-react-app/docs/getting-started/)

[redux](https://www.redux.org.cn/docs/basics/Actions.html)

[react-redux](https://react-redux.js.org/introduction/getting-started)

[antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)

[react-intl-universal](https://github.com/alibaba/react-intl-universal)