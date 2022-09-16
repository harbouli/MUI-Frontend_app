import {Box, Typography} from "@mui/material";
import React from "react";
import Photo from "@Assets/images/Photo1.png";
import Container from "@Components/Container";
import Separetor from "@Components/Separetor";
import Washer from "@Assets/SVG/washer-light.svg";
import IsShareWasherIteam from "./IsShareWasherIteam";
const arr = [
  {title: "Lorem Ipsum is simply dummy1", svg: Washer},
  {title: "Lorem Ipsum is simply dummy2", svg: Washer},
  {title: "Lorem Ipsum is simply dummy3", svg: Washer},
];

export default function WhatIsShareWsher() {
  return (
    <Box
      width="100%"
      height="90vh"
      sx={{
        backgroundImage: `url(${Photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Separetor height="15vh" />
      <Container>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="#fff"
          textAlign="center"
        >
          What is ShareWasher ?
        </Typography>
        <Separetor height="7vh" />
        <Box sx={{justifyContent: "space-between", display: "flex"}}>
          {arr.map((ar, i) => (
            <Box
              key={i}
              sx={{width: 250, alignItems: "center", justifyContent: "center"}}
            >
              <IsShareWasherIteam Title={ar.title} Svg={ar.svg} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
