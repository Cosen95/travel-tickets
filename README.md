# travel-tickets

采用 react hooks 构建的 pwa 应用

## react 新特性

### context 及 contextType

> 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

- React.createContext

```
const MyContext = React.createContext(defaultValue);
```

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。

- Context.Provider
  每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
- Context.Consumer
  React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。这个函数接收当前的 context 值，返回一个 React 节点。
- Class.contextType
  挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。

### React.lazy、Suspense 及错误边界（Error boundaries）

- React.lazy

```
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```

- Suspense
  > 如果在 MyComponent 渲染完成后，包含 OtherComponent 的模块还没有被加载完成，我们可以使用加载指示器为此组件做优雅降级。这里我们使用 Suspense 组件来解决。

```
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

fallback 属性接受任何在组件加载过程中你想展示的 React 元素。

- 错误边界（Error boundaries）
  > 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### React.PureComponent 和 React.memo

- PureComponent
  > React.PureComponent 和 React.Component 类似，都是定义一个组件类。不同是 React.Component 没有实现 shouldComponentUpdate()，而 React.PureComponent 通过 props 和 state 的浅比较实现了。

```
class Welcome extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- memo
  > React.memo 是一个高阶组件，类似于 React.PureComponent，不同于 React.memo 是 function 组件，React.PureComponent 是 class 组件。

```
const MyComponent = React.memo(props => {
  /* render using props */
  return (

  );
});
```

这种方式依然是一种对象的浅比较，有复杂对象时无法 render。在 React.memo 中可以自定义其比较方法的实现。

```
import React from "react";

function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};

function areEqual(prevProps, nextProps) {
    if(prevProps.seconds===nextProps.seconds){
        return true
    }else {
        return false
    }

}
export default React.memo(Child,areEqual)
```

### React Hooks

- useState
  > 参考`https://react.docschina.org/docs/hooks-state.html`
- useEffect
  > 参考`https://react.docschina.org/docs/hooks-effect.html`
