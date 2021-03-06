import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 14000,
    color: "#fff",
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Backdrop>
    </div>
  );
}
