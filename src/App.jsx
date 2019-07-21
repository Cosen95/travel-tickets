import React, { Component, useState, useEffect } from "react";

// class App extends Component {
//   state = {
//     count: 0,
//     size: {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight
//     }
//   }
//   onResize = () => {
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       }
//     })
//   }
//   componentDidMount() {
//     window.addEventListener('resize', this.onResize, false)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize, false)
//   }
//   componentDidUpdate() {

//   }
//   render() {
//     const { count, size } = this.state;
//     return (
//       <div>
//         <button onClick={() => {this.setState({count: count + 1})}}>
//           Click({count})
//           Size: {size.width} * {size.height}
//         </button>
//       </div>
//     )
//   }
// }

function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };
  useEffect(() => {
    document.title = count;
  });
  useEffect(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click({count})
      </button>
      Size: {size.width} * {size.height}
    </div>
  );
}

export default App;
