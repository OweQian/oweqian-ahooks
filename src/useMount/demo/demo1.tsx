/**
 * title: Basic usage
 * desc: The function is called right after the component is mounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */
// import { message } from 'antd';
import React, { useState } from 'react';
import useMount from '..';

const MyComponent = () => {
  useMount(() => {
    console.log('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, setState] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setState(!state)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
