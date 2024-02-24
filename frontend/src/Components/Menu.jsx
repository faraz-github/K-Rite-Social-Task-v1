import { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Register from "./Register";
import Login from "./Login";

export default function BasicMenu() {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleRegisterClose = () => {
    setOpenRegister(false);
  };
  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openRegisterDialog = () => {
    setOpenRegister(true);
    handleClose();
  };
  const openLoginDialog = () => {
    setOpenLogin(true);
    handleClose();
  };

  // TODO when on landing page render register, login
  // TODO When logged-in render profile, friends, chats and logout button

  return (
    <div>
      <IconButton
        size="large"
        color="secondary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={openRegisterDialog}>Register</MenuItem>
        <MenuItem onClick={openLoginDialog}>Login</MenuItem>
      </Menu>
      <Register open={openRegister} handleClose={handleRegisterClose} />
      <Login open={openLogin} handleClose={handleLoginClose} />
    </div>
  );
}
