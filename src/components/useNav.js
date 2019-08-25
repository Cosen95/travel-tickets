import { useCallback } from "react";

import { timeHandler } from "../utils/date";

export default function useNav(departDate, dispatch, prevDate, nextDate) {
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

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next
  };
}
