import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { timeHandler } from "../../utils/date";
import "./DepartDate";
import dayjs from "dayjs";

export default function DepartDate(props) {
  const { time, onClick } = props;
  const handleDepart = timeHandler(time);
  const departDate = new Date(handleDepart);

  const departDateString = useMemo(() => {
    return dayjs(handleDepart).format("YYYY-MM-DD");
  }, [handleDepart]);

  const isToday = handleDepart === timeHandler();

  const weekString =
    "周" +
    ["日", "一", "二", "三", "四", "五", "六"][departDate.getDay()] +
    (isToday ? "(今天)" : "");

  return (
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className="depart-week">{weekString}</span>
    </div>
  );
}

DepartDate.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
