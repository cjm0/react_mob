import React, { useState, useEffect, useRef,useLayoutEffect, useContext, useCallback } from 'react';
import './index.less';

function Hook() {
  const [count, setCount] = useState(1);
  const handle = useCallback(() => {
    setCount(count + 1)
  }, [count])

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 500)
  }, [count])

  useCallback(() => {
    console.log('useCallback' + count);
  })

  return (
    <div className="hook_index">
      <p>{count}</p>
      <button onClick={handle}>
        Click me
      </button>
    </div>
  )
}

export default Hook;
