import {Typography} from "@mui/material";
import React from "react";

export default function IsShareWasherIteam({Svg, Title}) {
  return (
    <>
      <img src={Svg} width={200} alt="ShareWasher" style={{marginLeft: 25}} />
      <Typography variant="h5" textAlign="center" color="secondary">
        {Title}
      </Typography>
    </>
  );
}
