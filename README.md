# travel-tickets
采用react hooks构建的pwa应用

## react新特性
### context及contextType
> 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。
* React.createContext
```
const MyContext = React.createContext(defaultValue);
```
创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
* Context.Provider
每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
* Context.Consumer
React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。这个函数接收当前的 context 值，返回一个 React 节点。
* Class.contextType
挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。