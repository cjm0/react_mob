/**
 * @Description : 路由器守卫 routerGuard.js
 * @Author      : chenjianmin
 * @Date        : 2021-05-25 18:30:50
 */

import React from 'react';

class RouterGuard extends React.Component {
  componentDidMount() {
    let { meta } = this.props
    document.title = meta.title
  }

  render() {
    const { component, ...next } = this.props
    const PageComponent = component
    return <PageComponent {...next} />
  }
}

export default RouterGuard;
