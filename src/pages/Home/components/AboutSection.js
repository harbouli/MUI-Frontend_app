import {Box, Typography} from "@mui/material";
import React from "react";
import Separetor from "@Components/Separetor";

export default function AboutSection() {
  return (
    <Box sx={{width: "100%", height: "auto"}}>
      <Separetor height="25vh" />
      <Box sx={{width: "70%", display: "flex", mx: "auto"}}>
        <div
          style={{
            backgroundColor: "#0249FF",
            height: "auto",
            width: 10,
            borderRadius: 5,
            marginRight: 30,
          }}
        />
        <Typography variant="h2" fontWeight="bold" component="div">
          Find your perfect
          <Typography
            variant="h2"
            color="primary"
            fontWeight="bold"
            component="span"
          >
            {" "}
            ShareWasher
          </Typography>{" "}
          services for your clothes
        </Typography>
      </Box>
      <Separetor height="25vh" />
    </Box>
  );
}
