import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header";
import DepartDate from "./components/DepartDate";
import HighSpeed from "./components//HighSpeed";
import Journey from "./components//Journey";
import Submit from "./components/Submit";
import CitySelector from "../components/CitySelector";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity
} from "./actions";
function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate
  } = props;
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

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity
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
        <DepartDate time={departDate} />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
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
