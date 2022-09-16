import React from "react";
import Photo from "@Assets/images/Photo2.png";
import {Box, Typography} from "@mui/material";
import PlayIcon from "@Assets/SVG/play.svg";
export default function VideoSection() {
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        backgroundImage: `url(${Photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={PlayIcon} alt="PlayIcon" />
      <Typography variant="h3" color="#fff" fontWeight={500} my={5}>
        Sharewasher in 30 Secande
      </Typography>
    </Box>
  );
}
