import React, { Component, createContext } from 'react';
import './App.css';

const BatteryContext = createContext(30);

class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    return (
      // <BatteryContext.Consumer>
      //   {
      //     battery => <h1>Battery: {battery}</h1>
      //   }
      // </BatteryContext.Consumer>
      <h1>Battery: {battery}</h1>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class App extends Component {
  render() {
    return (
      <BatteryContext.Provider value={60}>
        <Middle />
      </BatteryContext.Provider>
    );
  }
}



export default App;
