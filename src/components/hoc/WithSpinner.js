import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, isReady, ...props }) => {
    return isLoading ? (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    ) : (
      isReady && <WrappedComponent {...props} />
    );
  };

  return spinner;
};

export default WithSpinner;
