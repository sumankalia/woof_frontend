import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import petsReducer from "./pets";
import snackbarReducer from "./snackbar";

const rootReducer = combineReducers({
  pets: petsReducer,
  categories: categoriesReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
