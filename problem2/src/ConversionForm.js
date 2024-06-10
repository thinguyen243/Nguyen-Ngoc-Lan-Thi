import React, { useState } from "react";
import { SelectCountry } from "./components/SelectCountry";
import { Amount } from "./components/Amount";
import { SwapButton } from "./components/SwapButton";
import { ConvertButton } from "./components/ConvertButton";
import { Grid, Typography } from "@mui/material";
import api from "./api/api";
export function ConversionForm() {
  const [amountToSend, setAmountToSend] = useState(1);
  const [amountToReceive, setAmountToReceive] = useState(null);
  const [initialFlag, setInitialFlag] = useState("USD");
  const [destinationFlag, setDestinationFlag] = useState("VND");
  const pattern = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const validate = (input) => {
    setAmountToSend(input);
    if (input.length == 0) {
      setIsError(true);
      setError("Must be filled");
      return;
    }
    if (pattern.test(input) == false) {
      setIsError(true);
      setError("Please enter a positive decimal");
      return;
    }
    setIsError(false);
    setError("");
  };
  const convert = (initial, destination, amount) => {
    if (isError == false) {
      api.getRate(initial, destination, amount).then((res) => {
        setAmountToReceive(res);
      });
    }
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        maxWidth="50wh"
        padding="20px"
        spacing={2}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h5">Currency Converter</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Amount
            validate={validate}
            value={amountToSend}
            isError={isError}
            error={error}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SelectCountry
            label={"From"}
            value={initialFlag}
            setValue={setInitialFlag}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <div style={{ textAlign: "center", verticalAlign: "text-bottom" }}>
            <SwapButton
              setFrom={setInitialFlag}
              setTo={setDestinationFlag}
              amount={amountToSend}
              from={initialFlag}
              to={destinationFlag}
              convert={convert}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3} alignItems="center" justifyContent="center">
          <SelectCountry
            label={"To"}
            value={destinationFlag}
            setValue={setDestinationFlag}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography>
            {amountToSend} {initialFlag} = {amountToReceive} {destinationFlag}
          </Typography>
        </Grid>
        <Grid item>
          <div style={{ textAlign: "center" }}>
            <ConvertButton
              initial={initialFlag}
              destination={destinationFlag}
              amount={amountToSend}
              convert={convert}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
