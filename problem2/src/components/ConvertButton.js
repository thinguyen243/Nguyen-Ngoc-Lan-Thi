import React from "react";
import { Button } from "@mui/material";
import { BsCurrencyExchange } from "react-icons/bs";

export const ConvertButton = ({
  initial,
  destination,
  amount,
  convert,
  isError,
}) => {
  return (
    <Button
      color="primary"
      variant="outlined"
      disabled={isError}
      onClick={(e) => {
        e.preventDefault();
        convert(initial, destination, amount);
      }}
      startIcon={<BsCurrencyExchange />}
    >
      Convert
    </Button>
  );
};
