import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tickets from "./reducers/ticket";

const combinedReducer = combineReducers({
  tickets,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
