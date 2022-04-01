import { types } from "../types";

const CalendarReducer = (state, action) => {
  switch (action.type) {
    case types.setMonth:
      return {
        ...state,
        mes: action.payload.mes,
      };
      default:
      return state
  }
};

export { CalendarReducer };