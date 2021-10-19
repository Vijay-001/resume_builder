import { actionType } from "../types";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action: any) => {
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
    case actionType.GeUserDetails_Success:
      return {
        ...state,
        users: action.payload,
      };
    case actionType.GetUserDetails_Failed:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
