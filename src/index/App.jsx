import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header.jsx";
import DepartDate from "./components/DepartDate.jsx";
import HighSpeed from "./components//HighSpeed.jsx";
import Journey from "./components//Journey.jsx";
import Submit from "./components/Submit.jsx";

function App(props) {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>

      <Journey />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(App);
