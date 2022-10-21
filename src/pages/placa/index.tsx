import {
  Box,
  Button,
  Container,
  FormControl,
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

      <Box className="content2">
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
        <Typography className="title2" variant="h5" gutterBottom>
          REALIZA TU PAGO
        </Typography>
        <Container className="rectangulo-placa">
          <Box
            sx={{
              maxWidth: "100%",
            }}
          >
            <FormControl fullWidth variant="outlined">
              <Typography className="label"> *NO. PLACA </Typography>
              <TextField fullWidth label="INGRESA TU NO. DE PLACA" />
            </FormControl>
          </Box>
        </Container>
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
