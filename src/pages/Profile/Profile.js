import {Box} from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserInformation from "./UserInformation";
import Favorits from "./Favorits";
export default function Profile() {
  // States
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        bgcolor: "#E2E2E2",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          typography: "body1",
          bgcolor: "#fff",
          height: "auto",
          minHeight: "80vh",
          my: 10,
        }}
      >
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: "divider"}}>
            <TabList
              onChange={handleChange}
              aria-label="Tab Navigation"
              sx={{justifyContent: "space-between"}}
              textColor="primary"
              indicatorColor="primary"
              TabIndicatorProps={{style: {height: "4px", borderRadius: 2}}}
            >
              <Tab label="User Info" sx={{width: "25%"}} value="1" />
              <Tab label="Favorites" sx={{width: "25%"}} value="2" />
              <Tab label="My Servises" sx={{width: "25%"}} value="3" />
              <Tab label="Wallets" sx={{width: "25%"}} value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UserInformation />
          </TabPanel>
          <TabPanel value="2">
            <Favorits />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
