import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { closeErrorMsg } from "../../redux/requestsStatus/requestsStatusActions";

const ErrorMessage = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeErrorMsg());
  };
  return (
    <Dialog open={true} keepMounted onClose={handleClose}>
      <DialogTitle>{"OOPS somthing went wrong"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please check internet connection and try again later
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Got it</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorMessage;
