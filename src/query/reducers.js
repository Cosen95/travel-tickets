import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_DEPARTDATE,
  ACTION_SET_HIGHSPEED,
  ACTION_SET_TRAINLIST,
  ACTION_SET_ORDERTYPE,
  ACTION_SET_ONLYTICKETS,
  ACTION_SET_TICKETTYPES,
  ACTION_SET_CHECKEDTICKETTYPES,
  ACTION_SET_TRAINTYPES,
  ACTION_SET_CHECKEDTRAINTYPES,
  ACTION_SET_DEPARTSTATIONS,
  ACTION_SET_CHECKEDDEPARTSTATIONS,
  ACTION_SET_ARRIVESTATIONS,
  ACTION_SET_CHECKEDARRIVESTATIONS,
  ACTION_SET_DEPARTTIMESTART,
  ACTION_SET_DEPARTTIMEEND,
  ACTION_SET_ARRIVETIMESTART,
  ACTION_SET_ARRIVETIMEEND,
  ACTION_SET_ISFILTERSVISIBLE,
  ACTION_SET_SEARCHPARSED
} from "./actions";
import { ORDER_DEPART, ORDER_DURATION } from "./constant";
export default {
  from(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_FROM:
        return payload;
      default:
    }

    return state;
  },
  to(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TO:
        return payload;
      default:
    }

    return state;
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTDATE:
        return payload;
      default:
    }

    return state;
  },
  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_HIGHSPEED:
        return payload;
      case ACTION_SET_CHECKEDTRAINTYPES:
        const checkedTrainTypes = payload;
        return Boolean(checkedTrainTypes[1] && checkedTrainTypes[5]);
      default:
    }

    return state;
  },
  trainList(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TRAINLIST:
        return payload;
      default:
    }

    return state;
  },
  orderType(state = ORDER_DEPART, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ORDERTYPE:
        return payload;
      default:
    }

    return state;
  },
  onlyTickets(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ONLYTICKETS:
        return payload;
      default:
    }

    return state;
  },
  ticketTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TICKETTYPES:
        return payload;
      default:
    }

    return state;
  },
  checkedTicketTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_CHECKEDTICKETTYPES:
        return payload;
      default:
    }

    return state;
  },
  trainTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TRAINTYPES:
        return payload;
      default:
    }

    return state;
  },
  checkedTrainTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_CHECKEDTRAINTYPES:
        return payload;
      case ACTION_SET_HIGHSPEED:
        const highSpeed = payload;
        const newCheckedTrainTypes = { ...state };
        if (highSpeed) {
          newCheckedTrainTypes[1] = true;
          newCheckedTrainTypes[5] = true;
        } else {
          delete newCheckedTrainTypes[1];
          delete newCheckedTrainTypes[5];
        }

        return newCheckedTrainTypes;
      default:
    }

    return state;
  },
  departStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTSTATIONS:
        return payload;
      default:
    }

    return state;
  },
  checkedDepartStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_CHECKEDDEPARTSTATIONS:
        return payload;
      default:
    }

    return state;
  },
  arriveStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVESTATIONS:
        return payload;
      default:
    }

    return state;
  },
  checkedArriveStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_CHECKEDARRIVESTATIONS:
        return payload;
      default:
    }

    return state;
  },
  departTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTTIMESTART:
        return payload;
      default:
    }

    return state;
  },
  departTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTTIMEEND:
        return payload;
      default:
    }

    return state;
  },
  arriveTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVETIMESTART:
        return payload;
      default:
    }

    return state;
  },

  arriveTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVETIMEEND:
        return payload;
      default:
    }

    return state;
  },

  isFiltersVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ISFILTERSVISIBLE:
        return payload;
      default:
    }
    return state;
  },

  searchParsed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SEARCHPARSED:
        return payload;
      default:
    }
    return state;
  }
};
