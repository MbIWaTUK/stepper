import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
});

export const storeToolkit = configureStore({
  reducer: rootReducer,
});
