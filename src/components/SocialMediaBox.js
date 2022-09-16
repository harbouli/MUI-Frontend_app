import {Button, Typography} from "@mui/material";
import React from "react";

export default function SocialMediaBox({icon, textColor, title, ...props}) {
  return (
    <Button {...props}>
      <img src={icon} alt="Social Media Icone" width="30" />
      <Typography variant="subtitle1" color={textColor} fontWeight="bold">
        {title}
      </Typography>
    </Button>
  );
}
