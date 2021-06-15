import React, { useState, useEffect, useContext } from 'react';
import './index.less';

function Hook() {
  const [count, setCount] = useState(1);

  useEffect(() => {

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
