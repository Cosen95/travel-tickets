import React, { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ORDER_DEPART } from "../constant";
import "./Bottom.css";

const Filter = memo(function Filter(props) {
  const { name, checked } = props;
  return <li className={classnames({ checked })}>{name}</li>;
});
Filter.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

const Option = memo(function Option(props) {
  const { title, options, checkedMap } = props;
  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options.map(option => {
          return (
            <Filter
              key={option.value}
              {...option}
              checked={option.value in checkedMap}
            />
          );
        })}
      </ul>
    </div>
  );
});
Option.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  checkedMap: PropTypes.object.isRequired
};

const BottomModal = memo(function BottomModal(props) {
  const {
    toggleIsFiltersVisible,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  } = props;

  const optionGroup = [
    {
      title: "坐席类型",
      options: ticketTypes,
      checkedMap: checkedTicketTypes
    },
    {
      title: "车次类型",
      options: trainTypes,
      checkedMap: checkedTrainTypes
    },
    {
      title: "出发车站",
      options: departStations,
      checkedMap: checkedDepartStations
    },
    {
      title: "到达车站",
      options: arriveStations,
      checkedMap: checkedArriveStations
    }
  ];
  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span className="reset">重置</span>
            <span className="ok">确定</span>
          </div>
          <div className="options">
            {optionGroup.map(group => (
              <Option {...group} key={group.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
BottomModal.propTypes = {
  toggleIsFiltersVisible: PropTypes.func.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedArriveStations: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired,
  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired
};

export default function Bottom(props) {
  const {
    highSpeed,
    orderType,
    onlyTickets,
    isFiltersVisible,
    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd
  } = props;
  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={toggleOrderType}>
          <i className="icon">&#xf065;</i>
          {orderType === ORDER_DEPART ? "出发 早→晚" : "耗时 短→长"}
        </span>
        <span
          className={classnames("item", { "item-on": highSpeed })}
          onClick={toggleHighSpeed}
        >
          <i className="icon">{highSpeed ? "\uf43f" : "\uf43e"}</i>
          只看高铁动车
        </span>
        <span
          className={classnames("item", { "item-on": onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className="icon">{onlyTickets ? "\uf43d" : "\uf43c"}</i>
          只看有票
        </span>
        <span
          className={classnames("item", { "item-on": isFiltersVisible })}
          onClick={toggleIsFiltersVisible}
        >
          <i className="icon">{"\uf0f7"}</i>
          综合筛选
        </span>
      </div>
      {isFiltersVisible && (
        <BottomModal
          toggleIsFiltersVisible={toggleIsFiltersVisible}
          setCheckedTicketTypes={setCheckedTicketTypes}
          setCheckedTrainTypes={setCheckedTrainTypes}
          setCheckedDepartStations={setCheckedDepartStations}
          setCheckedArriveStations={setCheckedArriveStations}
          setDepartTimeStart={setDepartTimeStart}
          setDepartTimeEnd={setDepartTimeEnd}
          setArriveTimeStart={setArriveTimeStart}
          setArriveTimeEnd={setArriveTimeEnd}
          checkedTicketTypes={checkedTicketTypes}
          checkedTrainTypes={checkedTrainTypes}
          checkedDepartStations={checkedDepartStations}
          checkedArriveStations={checkedArriveStations}
          ticketTypes={ticketTypes}
          trainTypes={trainTypes}
          departStations={departStations}
          arriveStations={arriveStations}
          departTimeStart={departTimeStart}
          departTimeEnd={departTimeEnd}
          arriveTimeStart={arriveTimeStart}
          arriveTimeEnd={arriveTimeEnd}
        />
      )}
    </div>
  );
}

Bottom.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  orderType: PropTypes.number.isRequired,
  onlyTickets: PropTypes.bool.isRequired,
  isFiltersVisible: PropTypes.bool.isRequired,
  toggleOrderType: PropTypes.func.isRequired,
  toggleHighSpeed: PropTypes.func.isRequired,
  toggleOnlyTickets: PropTypes.func.isRequired,
  toggleIsFiltersVisible: PropTypes.func.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedArriveStations: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired,
  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired
};
