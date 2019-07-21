import React, { Component, createContext, lazy, Suspense } from 'react';
import './App.css';

const About = lazy(() => import(/* webpackChunkName: "about" */'./About.jsx'));

// ErrorBoundary

// const BatteryContext = createContext(30);

// class Leaf extends Component {
//   // static contextType = BatteryContext;
//   render() {
//     // const battery = this.context;
//     return (
//       // <BatteryContext.Consumer>
//       //   {
//       //     battery => <h1>Battery: {battery}</h1>
//       //   }
//       // </BatteryContext.Consumer>
//       // <h1>Battery: {battery}</h1>
//     )
//   }
// }

// class Middle extends Component {
//   render() {
//     return <Leaf />
//   }
// }

class App extends Component {
  state = {
    hasError: false
  }
  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }
  static getDerivedStateFromError(){
    return {
      hasError: true
    }
  }
  render() {
    const { hasError } = this.state;
    if(hasError) {
      return <div>报错了！！</div>
    }
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About></About>
        </Suspense>
      </div>
      // <BatteryContext.Provider value={60}>
      //   <Middle />
      // </BatteryContext.Provider>
    );
  }
}



export default App;
