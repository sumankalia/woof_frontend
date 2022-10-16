import { HIDE_SNACKBAR, SHOW_SNACKBAR } from "../actionTypes/snackbar";

export const showSnackbar = ({ dispatch, payload }) => {
  dispatch({
    type: SHOW_SNACKBAR,
    payload,
  });
};

export const hideSnackbar = ({ dispatch }) => {
  dispatch({
    type: HIDE_SNACKBAR,
  });
};
