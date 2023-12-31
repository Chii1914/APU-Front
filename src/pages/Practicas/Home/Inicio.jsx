import React from "react";
import PageContainer from "../../../components/container/PageContainer";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import ButtonsSign from "./Components/ButtonsLog";
import backgroundImage from "./Components/Background.jpg";

function Inicio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageContainer
      title="Prácticas - Postulación a practicas profesionales | Administración Pública"
      description="Sistema de prácticas profesionales"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "980px",
          padding: isMobile ? 2 : 3,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 4,
            width: isMobile ? "100%" : "70%", // 100% width for mobile, 70% for PC
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="h1"
                sx={{
                  color: "black",
                  fontFamily: "monospace",
                  fontWeight: 700,

                  textAlign: "center",
                }}
              >
                Postulación a Prácticas Profesionales
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="https://practicas.administracionpublica-uv.cl/imagenes/logo_sis_practicas.png"
                alt="Logo Practicas Profesionales"
                style={{
                  width: "350px",
                  height: "100px",
                  transform: "scale(0.8)", // Adjust the scale as needed
                }} // Adjust the size as needed
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", mb: 0, pb: 0 }}>
              <Typography
                variant={isMobile ? "h5" : "h5"}
                sx={{ textAlign: "center", fontWeight: 300 }}
              >
                Bienvenido al sistema de prácticas de Administración Pública de
                la Universidad de Valparaíso. Para continuar, necesitas ingresar
                con tu cuenta. De no contar con una, puedes registrarte en
                nuestro sistema.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ pt: 0, mt: 0 }}>
              <ButtonsSign />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default Inicio;
