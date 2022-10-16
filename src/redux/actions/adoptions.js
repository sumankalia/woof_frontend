import { createAdoption } from "../../services/adoptions";
import { SET_ADOPTIONS_LOADER } from "../actionTypes/adoptions";
import { showSnackbar } from "./snackbar";

export const createAAdoption = ({ dispatch, payload }) => {
  dispatch({
    type: SET_ADOPTIONS_LOADER,
    payload: true,
  });

  createAdoption(payload)
    .then(({ data }) => {
      showSnackbar({
        dispatch,
        payload: {
          message: "Created scucess",
          type: "success",
        },
      });
      dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: false,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: false,
      });
    });
};
