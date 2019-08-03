import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
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

  // const handleExchangeFromTo = useCallback(() => {
  //   dispatch(exchangeFromTo());
  // }, []);

  // const handleShowCitySelector = useCallback(val => {
  //   dispatch(showCitySelector(val));
  // });

  const fromToCbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="" className="form">
        <Journey from={from} to={to} {...fromToCbs} />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
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
