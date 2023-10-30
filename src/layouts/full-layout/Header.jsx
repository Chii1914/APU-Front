import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function Header() {
  const pages = [
    { name: "Inicio", path: "/" },
    { name: "Volver a APU", path: "/categorias" },
  ];

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => () => {
    setAnchorElNav(null);
    if (path === "/categorias") window.location.href = "https://administracionpublica-uv.cl/beta/";
    navigate(path);
  };  

  const navToHome = () => {
    window.location.href = "https://administracionpublica-uv.cl/beta/";
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#043C5C" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#043C5C" }}>
        <Toolbar disableGutters sx={{ backgroundColor: "#043C5C" }}>
          <Box sx={{ flexGrow: 1, justifyContent: 'center',  cursor: 'pointer' }}>
            <Tooltip title="Volver a Administración Pública">
            <img
              alt="Remy Sharp"
              src="https://administracionpublica-uv.cl/beta/images/logo_ba2.png"
              style={{ width: '140px', height: '40px' }} // Set the size as needed
              onClick={navToHome}
            />
              
            </Tooltip>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu(page.path)}
                sx={{ my: 2, mr: 10, color: "white", display: "block" }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;