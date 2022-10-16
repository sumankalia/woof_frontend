import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { hideSnackbar } from "../redux/actions/snackbar";

const SnackBarComponent = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => hideSnackbar({ dispatch })}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={() => hideSnackbar({ dispatch })}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarComponent;
