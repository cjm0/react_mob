import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import './index.less';

function Hook() {
  const [count, setCount] = useState(() => {
    return 10
  });

  useEffect(() => {
    console.log(1);
  }, [])

  useLayoutEffect(() => {
    console.log(2);
  }, [])

  return (
    <div className="hook_index">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Hook;
