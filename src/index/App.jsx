import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header.jsx";
import DepartDate from "./components/DepartDate.jsx";
import HighSpeed from "./components//HighSpeed.jsx";
import Journey from "./components//Journey.jsx";
import Submit from "./components/Submit.jsx";

function App(props) {
  return (
    <div>
      <Header />
      <Journey />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {},
  function mapDispatchToProps(dispatch) {}
)(App);
