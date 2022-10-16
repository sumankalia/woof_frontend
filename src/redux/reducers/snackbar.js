import { HIDE_SNACKBAR, SHOW_SNACKBAR } from "../actionTypes/snackbar";

const initialState = {
  open: false,
  type: "success",
  message: "",
};

const snackbarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        open: true,
        message: payload.message,
        type: payload.type,
      };

    case HIDE_SNACKBAR:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
