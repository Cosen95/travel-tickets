import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import URI from "urijs";
import dayjs from "dayjs";
import { timeHandler } from "../utils/date";
import Header from "../components/Header";
import Nav from "../components/Nav";
import List from "./components/List";
import Bottom from "./components/Bottom";
import {
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  setSearchParsed,
  setTrainList,
  setTicketTypes,
  setTrainTypes,
  setDepartStations,
  setArriveStations,
  prevDate,
  nextDate
} from "./actions";

function App(props) {
  const {
    from,
    to,
    departDate,
    highSpeed,
    dispatch,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  } = props;

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);

    const { from, to, date, highSpeed } = queries;
    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(timeHandler(dayjs(date).valueOf())));
    dispatch(setHighSpeed(highSpeed === "true"));
    dispatch(setSearchParsed(true));
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    const url = new URI("/rest/query")
      .setSearch("from", from)
      .setSearch("to", to)
      .setSearch("date", dayjs(departDate).format("YYYY-MM-DD"))
      .setSearch("highSpeed", highSpeed)
      .setSearch("orderType", orderType)
      .setSearch("onlyTickets", onlyTickets)
      .setSearch("checkedTicketTypes", Object.keys(checkedTicketTypes).join())
      .setSearch("checkedTrainTypes", Object.keys(checkedTrainTypes).join())
      .setSearch(
        "checkedDepartStations",
        Object.keys(checkedDepartStations).join()
      )
      .setSearch(
        "checkedArriveStations",
        Object.keys(checkedArriveStations).join()
      )
      .setSearch("departTimeStart", departTimeStart)
      .setSearch("departTimeEnd", departTimeEnd)
      .setSearch("arriveTimeStart", arriveTimeStart)
      .setSearch("arriveTimeEnd", arriveTimeEnd)
      .toString();
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log("res", res);
        const {
          dataMap: {
            directTrainInfo: {
              trains,
              filter: { ticketType, trainType, depStation, arrStation }
            }
          }
        } = res;
        dispatch(setTrainList(trains));
        dispatch(setTicketTypes(ticketType));
        dispatch(setTrainTypes(trainType));
        dispatch(setDepartStations(depStation));
        dispatch(setArriveStations(arrStation));
      });
  }, [
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  ]);

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const isPrevDisabled = timeHandler(departDate) <= timeHandler();
  const isNextDisabled =
    timeHandler(departDate) - timeHandler() > 20 * 86400 * 1000;
  const prev = useCallback(() => {
    if (isPrevDisabled) {
      return;
    }
    dispatch(prevDate());
  }, [isPrevDisabled]);

  const next = useCallback(() => {
    if (isNextDisabled) {
      return;
    }
    dispatch(nextDate());
  }, [isNextDisabled]);
  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from} ⇀ ${to}`} onBack={onBack} />
      </div>
      <div className="nav-wrapper">
        <Nav
          date={departDate}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          prev={prev}
          next={next}
        />
      </div>

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
