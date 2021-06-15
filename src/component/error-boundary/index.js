import React from 'react';
import './index.less';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    // 自定义降级后的 UI 并渲染
    if (this.state.hasError) {
      return (
        <div className="errboundary_index">
          <h1>Error Boundary Code went wrong</h1>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
