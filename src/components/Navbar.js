import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from "react-router-dom";



export default function Navbar({setIsOpen, setIsOpenSignUp}) {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {UID} = useSelector((state) => state.User);


// constant
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const navigation = useNavigate()

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="static"
        color="secondary"
        sx={{height: 80, justifyContent: "center"}}
      >
        <Toolbar variant="regular " sx={{justifyContent: "space-between"}}>
          <Typography
            variant="h4"
            color="primary"
            fontWeight="bold"
            component="div"
          >
            Sharewasher
          </Typography>
          {!UID ? (
            <>
              <Box
                sx={{
                  width: "40%",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Link to="feature" className="MenuLink">
                  Feature
                </Link>
                <Link to="feature" className="MenuLink">
                  Pricing
                </Link>
                <Link to="feature" className="MenuLink">
                  About
                </Link>
                <Link to="feature" className="MenuLink">
                  More
                </Link>
              </Box>
              <Box
                sx={{
                  width: "15%",
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => setIsOpenSignUp(true)}
                  sx={{width: 120}}
                >
                  Sign in
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{flexGrow: 0}}>
                {/* Notification Button */}
                <Tooltip title="Share Your Washer">
                  <Button style={{color:'#393939'}} onClick={() => console.log("Add Your Washer ")}>
                    <AddCircleOutlineOutlinedIcon fontSize='large' />
                    Share Your Washer
                  </Button>
                </Tooltip>
                {/* Notification Button */}
                <Tooltip title="Notification">
                  <IconButton onClick={() => console.log("Notification ")}>
                    <NotificationsNoneOutlinedIcon style={{color:'#393939'}} fontSize='large' />
                  </IconButton>
                </Tooltip>
                {/* Profile Image */}

                <Tooltip title="Setting">
                  <IconButton onClick={() => setIsMenuOpen(true)} sx={{p: 2}}>
                    <Avatar alt="Remy Sharp">HR</Avatar>
                  </IconButton>
                </Tooltip>

                {/* Menu Item Pofile */}
                <Menu
                  sx={{mt: "45px", mr: 5}}
                  id="menu-appbar"
                  anchorEl={isMenuOpen}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(isMenuOpen)}
                  onClose={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        navigation('profile')
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
