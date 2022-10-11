import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import imageFondo from "public/fondo_mazda.png";
import type { NextPage } from "next";
import Image from "next/image";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import Navbar from "../../components/navbar";

const pagePlaca: NextPage = () => {
  return (
    <Box className="content">
      <Navbar />
      <Box
        className="content"
        margin="0.7px 0 0"
        height="1920px"
        width="1080px"
      >
        <Image src={imageFondo} />
      </Box>

      <Box className="content2"  >
        <Button
          size="large"
          color="inherit"
          startIcon={<KeyboardBackspace />}
          variant="text"
        >
          Regresar
        </Button>
      </Box>

      <Box className="content">
        <Typography
          paddingTop={"20%"}
          className="title2"
          variant="h5"
          gutterBottom
        >
          REALIZA TU PAGO
        </Typography>
        <Box className="rectangulo">
          <Typography className="label"> *NO. PLACA </Typography>

          <Box
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          >
            <TextField
              required
              fullWidth
              label="INGRESA TU NO. DE PLACA"
              id="fullWidth"
            />
          </Box>
        </Box>
        <Box paddingTop={"30%"}>
          <Button variant="contained" className="buttonSecundary">
            <Typography className="text-button" gutterBottom>
              Continuar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default pagePlaca;
