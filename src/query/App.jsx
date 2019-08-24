import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Nav from "../components/Nav";
import List from "./components/List";
import Bottom from "./components/Bottom";

function App(props) {
  return (
    <div>
      <Nav />
      <List />
      <Bottom />
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
