import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Accordion() {
  return (
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{width: "33%", flexShrink: 0}}>Users</Typography>
        <Typography sx={{color: "text.secondary"}}>
          You are currently not an owner
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
          varius pulvinar diam eros in elit. Pellentesque convallis laoreet
          laoreet.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
