import React from "react";
import { Button } from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";
export const SwapButton = ({ setFrom, setTo, from, to, convert, amount }) => {
  const swap = (e) => {
    e.preventDefault();
    convert(to,from,amount);
    var temp = to;
    setTo(from);
    setFrom(temp);
    
  };
  return (
    <Button onClick={(e) => swap(e)}>
      <FaExchangeAlt/>
    </Button>
  );
};
