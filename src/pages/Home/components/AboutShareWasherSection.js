import React from "react";
import Separetor from "@Components/Separetor";
import Container from "@Components/Container";
import {Box, Typography} from "@mui/material";
export default function AboutShareWasherSection() {
  return (
    <>
      <Separetor height="25vh" />
      <Container>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          About ShareWasher
        </Typography>
        <Separetor height={40} />
        <Box
          sx={{
            alignSelf: "center",
            width: 350,
            height: 5,
            backgroundColor: "#000",
            mx: "auto",
            borderRadius: 5,
          }}
        />
        <Separetor height={40} />
        <Typography variant="subtitle1" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad
          minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </Typography>
        <Separetor height="25vh" />
      </Container>
    </>
  );
}
