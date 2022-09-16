import {Box} from "@mui/material";
import React from "react";

export default function Container({children, ...props}) {
  return (
    <Box {...props} sx={{mx: "auto", width: "70%"}}>
      {children}
    </Box>
  );
}
