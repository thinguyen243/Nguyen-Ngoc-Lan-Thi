import React from "react";
import { TextField } from "@mui/material";
export const Amount = ({ value, error, isError, validate }) => {
  
  return (
    <TextField
      id="standard-number"
      label="Amount to send"
      type="text"
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      style={{ width: "100%" }}
      error={isError}
      helperText={error}
      onChange={(e) => validate(e.target.value)}
      variant="standard"
    />
  );
};
