import {InputAdornment, TextField} from "@mui/material";
import React from "react";

export default function Input({label, icon, val}) {
  console.log(val);
  return (
    <TextField
      fullWidth
      id="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      value={val}
      label={label}
      sx={{mx: 5}}
    />
  );
}
