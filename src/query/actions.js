import { ORDER_DEPART, ORDER_DURATION } from "./constant";
import { timeHandler } from "../utils/date";

export const ACTION_SET_FROM = "SET_FROM";
export const ACTION_SET_TO = "SET_TO";
export const ACTION_SET_DEPARTDATE = "SET_DEPARTDATE";
export const ACTION_SET_HIGHSPEED = "SET_HIGHSPEED";
export const ACTION_SET_TRAINLIST = "SET_TRAINLIST";
export const ACTION_SET_ORDERTYPE = "SET_ORDERTYPE";
export const ACTION_SET_ONLYTICKETS = "SET_ONLYTICKETS";
export const ACTION_SET_TICKETTYPES = "SET_TICKETTYPES";
export const ACTION_SET_CHECKEDTICKETTYPES = "SET_CHECKEDTICKETTYPES";
export const ACTION_SET_TRAINTYPES = "SET_TRAINTYPES";
export const ACTION_SET_CHECKEDTRAINTYPES = "SET_CHECKEDTRAINTYPES";
export const ACTION_SET_DEPARTSTATIONS = "SET_DEPARTSTATIONS";
export const ACTION_SET_CHECKEDDEPARTSTATIONS = "SET_CHECKEDDEPARTSTATIONS";
export const ACTION_SET_ARRIVESTATIONS = "SET_ARRIVESTATIONS";
export const ACTION_SET_CHECKEDARRIVESTATIONS = "SET_CHECKEDARRIVESTATIONS";
export const ACTION_SET_DEPARTTIMESTART = "SET_DEPARTTIMESTART";
export const ACTION_SET_DEPARTTIMEEND = "SET_DEPARTTIMEEND";
export const ACTION_SET_ARRIVETIMESTART = "SET_ARRIVETIMESTART";
export const ACTION_SET_ARRIVETIMEEND = "SET_ARRIVETIMEEND";
export const ACTION_SET_ISFILTERSVISIBLE = "SET_ISFILTERSVISIBLE";
export const ACTION_SET_SEARCHPARSED = "SET_SEARCHPARSED";

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  };
}
export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  };
}
export function setDepartDate(departDate) {
  return {
    type: ACTION_SET_DEPARTDATE,
    payload: departDate
  };
}
export function setHighSpeed(highSpeed) {
  return {
    type: ACTION_SET_HIGHSPEED,
    payload: highSpeed
  };
}
export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch(setHighSpeed(!highSpeed));
  };
}
export function setTrainList(trainList) {
  return {
    type: ACTION_SET_TRAINLIST,
    payload: trainList
  };
}
export function toggleOrderType() {
  return (dispatch, getState) => {
    const { orderType } = getState();
    if (orderType === ORDER_DEPART) {
      dispatch({
        type: ACTION_SET_ORDERTYPE,
        payload: ORDER_DURATION
      });
    } else {
      dispatch({
        type: ACTION_SET_ORDERTYPE,
        payload: ORDER_DEPART
      });
    }
  };
}
export function toggleOnlyTickets() {
  return (dispatch, getState) => {
    const { onlyTickets } = getState();
    dispatch({
      type: ACTION_SET_ONLYTICKETS,
      payload: !onlyTickets
    });
  };
}
export function setTicketTypes(ticketTypes) {
  return {
    type: ACTION_SET_TICKETTYPES,
    payload: ticketTypes
  };
}
export function setCheckedTicketTypes(checkedTicketTypes) {
  return {
    type: ACTION_SET_CHECKEDTICKETTYPES,
    payload: checkedTicketTypes
  };
}
export function setTrainTypes(trainTypes) {
  return {
    type: ACTION_SET_TRAINTYPES,
    payload: trainTypes
  };
}
export function setCheckedTrainTypes(checkedTrainTypes) {
  return {
    type: ACTION_SET_CHECKEDTRAINTYPES,
    payload: checkedTrainTypes
  };
}
export function setDepartStations(departStations) {
  return {
    type: ACTION_SET_DEPARTSTATIONS,
    payload: departStations
  };
}
export function setCheckedDepartStations(checkedDepartStations) {
  return {
    type: ACTION_SET_CHECKEDDEPARTSTATIONS,
    payload: checkedDepartStations
  };
}
export function setArriveStations(arriveStations) {
  return {
    type: ACTION_SET_ARRIVESTATIONS,
    payload: arriveStations
  };
}
export function setCheckedArriveStations(checkedArriveStations) {
  return {
    type: ACTION_SET_CHECKEDARRIVESTATIONS,
    payload: checkedArriveStations
  };
}
export function setDepartTimeStart(departTimeStart) {
  return {
    type: ACTION_SET_DEPARTTIMESTART,
    payload: departTimeStart
  };
}
export function setDepartTimeEnd(departTimeEnd) {
  return {
    type: ACTION_SET_DEPARTTIMEEND,
    payload: departTimeEnd
  };
}
export function setArriveTimeStart(arriveTimeStart) {
  return {
    type: ACTION_SET_ARRIVETIMESTART,
    payload: arriveTimeStart
  };
}
export function setArriveTimeEnd(arriveTimeEnd) {
  return {
    type: ACTION_SET_ARRIVETIMEEND,
    payload: arriveTimeEnd
  };
}
export function toggleIsFiltersVisible() {
  return (dispatch, getState) => {
    const { isFiltersVisible } = getState();

    dispatch({
      type: ACTION_SET_ISFILTERSVISIBLE,
      payload: !isFiltersVisible
    });
  };
}
export function setSearchParsed(searchParsed) {
  return {
    type: ACTION_SET_SEARCHPARSED,
    payload: searchParsed
  };
}

export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();

    dispatch(setDepartDate(timeHandler(departDate) + 86400 * 1000));
  };
}

export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();

    dispatch(setDepartDate(timeHandler(departDate) - 86400 * 1000));
  };
}
