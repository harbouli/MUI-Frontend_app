import {Avatar, Badge, Box} from "@mui/material";
import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Input from "./components/Input";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {useSelector} from "react-redux";

export default function UserInformation() {
  const {user} = useSelector((state) => state.User);
  console.log(user);
  return (
    <Box
      sx={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        badgeContent={
          <Box
            sx={{
              bgcolor: "#393939",
              width: "40px",
              height: "40px",
              borderRadius: "99px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CameraAltOutlinedIcon color="secondary" />
          </Box>
        }
      >
        <Avatar alt="Harbouli" sx={{width: 150, height: 150, fontSize: 55}}>
          HR
        </Avatar>
      </Badge>
      {/* First Row */}
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Input
          label="Firstname"
          icon={<AccountCircleOutlinedIcon fontSize="large" />}
          val={user.firstname}
        />
        <Input
          label="Lastname"
          icon={<AccountCircleOutlinedIcon fontSize="large" />}
          val={user.lastname}
        />
      </Box>
      {/* Second Row */}
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Input
          label="Email"
          icon={<EmailOutlinedIcon fontSize="large" />}
          val={user.email}
        />
        <Input
          label="Phone"
          icon={<LocalPhoneOutlinedIcon fontSize="large" />}
        />
      </Box>
    </Box>
  );
}
