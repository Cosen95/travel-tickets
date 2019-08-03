import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header";
import DepartDate from "./components/DepartDate";
import HighSpeed from "./components//HighSpeed";
import Journey from "./components//Journey";
import Submit from "./components/Submit";
import { exchangeFromTo, showCitySelector } from "./actions";
function App(props) {
  const { from, to, dispatch } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const handleExchangeFromTo = useCallback(() => {
    dispatch(exchangeFromTo());
  }, []);

  const handleShowCitySelector = useCallback(val => {
    dispatch(showCitySelector(val));
  });

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>

      <Journey
        from={from}
        to={to}
        exchangeFromTo={handleExchangeFromTo}
        showCitySelector={handleShowCitySelector}
      />
      <DepartDate />
      <HighSpeed />
      <Submit />
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
