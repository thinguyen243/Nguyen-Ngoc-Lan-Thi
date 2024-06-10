// App.js
import React from "react";
import "./App.css";
import { ConversionForm } from "./ConversionForm";
import {Box} from "@mui/material";
const style = {
  boxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    border: "1px solid #FFFE",
    borderRadius: "12px",
    boxShadow: 24,
    backgroundColor: "#FFF",
  },
  paperStyle: {
    width: "100wh",
    height: "100vh",
    backgroundImage: "linear-gradient(to left, #000FFF, #00FFEE )",
  },
  headingStyle:{

  }
};
function App() {
  return (
    <Box style={style.paperStyle}>
      <Box style={style.boxStyle}>
        <ConversionForm />
      </Box>
    </Box>
  );
}

export default App;
