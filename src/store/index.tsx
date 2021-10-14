import { configureStore } from "@reduxjs/toolkit";
import Thunk from "redux-thunk";
import { reducer } from "./reducer/userReducer";

const middleware: any = [];
const rootReducer = reducer;

if (process.env.NODE_ENV === "development") {
  middleware.push(Thunk);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type IStateReduced = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
