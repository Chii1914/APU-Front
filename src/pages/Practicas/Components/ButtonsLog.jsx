import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [inputs, setInputs] = useState({
    RUN: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/userver/", inputs);
      
      if (res.data.status === true) {
        alert("Bienvenido ");
        
      }else if(res.data.message === "Usuario no encontrado"){
        alert("Usuario no encontrado")
      }else if(res.data.message === "Contraseña incorrecta"){
        alert("Contraseña incorrecta")
      }
    } catch (error) {
      console.error("Error al hacer la petición:", error.response.data);
      // Aquí puedes establecer algún estado o mostrar un mensaje al usuario
  }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          p: isMobile ? 2 : 4,
        }}
      >
          <Box
          sx={{
            width: isMobile ? '100%' : '500px',
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            src="https://pbs.twimg.com/profile_images/681180785504862208/RNR8RGGM_400x400.jpg"
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="RUN"
              label="Ingresa tu Rut sin puntos ni guión"
              name="RUN"
              autoComplete="RUN"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
          </Box>
        </Box>
    </ThemeProvider>
  );
}
