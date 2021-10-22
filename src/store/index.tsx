import { configureStore } from "@reduxjs/toolkit";
import Thunk from "redux-thunk";
import rootReducer from "./reducer/userReducer";

const middleware: any = [];
middleware.push(Thunk);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type IStateReduced = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
