import { actionType } from "../types";

const initialState = {
  users: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.UserDetails_Success:
      return {
        ...state,
        users: action.payload.user,
      };
    case actionType.UserDetails_Failed:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
