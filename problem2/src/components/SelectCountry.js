import React from "react";
import { Image } from "react-bootstrap";
import { MenuItem, TextField } from "@mui/material";
import { country_list } from "../country_list";
export const SelectCountry = ({ value, setValue, label }) => {
  return (
    <TextField
      id="standard-select-currency"
      select
      label={label}
      value={value}
      variant="standard"
      style={{ width: "100%" }}
      onChange={(e) => {
        setValue(e.target.value);
        console.log(e.target.name);
      }}
    >
      {country_list.map((option) => (
        <MenuItem key={option.code} value={option.label}>
          <Image src={`https://flagsapi.com/${option.code}/flat/16.png`} />{" "}
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
