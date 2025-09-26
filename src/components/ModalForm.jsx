import { Box, Button, Typography } from "@mui/material";

export const ModalForm = ({ name, handleCloseModal }) => {
  return (
    <Box
      sx={{
        background: "#ccc",
        position: "absolute",
        zIndex: 2,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          // backgroundColor: "black",
          position: "absolute",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            fontWeight: "bold",
          }}
        >
          ¡HOLA!
        </Typography>

        <Typography mb={14} variant="h4">
          Bienvenido {name}
        </Typography>

        <Button
          sx={{
            backgroundColor: "black",
            zIndex: 2,
            // width: "100%",
            // height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            
          }}
          onClick={handleCloseModal}
        >
          Cerrar
        </Button>
      </Box>
    </Box>
  );
};
